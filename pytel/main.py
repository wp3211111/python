import asyncio
import copy
import hashlib
import os
import re
import time
import datetime
import pymongo
import redis
from apscheduler.schedulers.background import BackgroundScheduler

from datetime import timedelta
from flask_cors import cross_origin, CORS
import json
from flask_socketio import SocketIO
from flask import Flask, render_template, request, jsonify, redirect, url_for, Blueprint
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from flask_docs import ApiDoc

from m_crud import insert_many, find_all, delete_by_id, find_all_page
from r_crud import find_hash, add_hash

client = redis.Redis(host='localhost', port=6379, db=0)

url = "mongodb://localhost:27017"

# 设置mongoDB 结果 解码
mgoclient = pymongo.MongoClient(url)

# 黑名单ip
black_list = {}
# 读取config下的admin.json文件
SUPER_ADMIN = json.load(open('./config/admin.json', encoding='utf-8'))
# 读取config下的chat_spider.json文件
CHAT_SPIDER = json.load(open('config/chat_spider_config.json', encoding='utf-8'))
Oline = 0
# 违法词汇 列表
# 读取config下的illegal.json文件

c = json.load(open('./config/chat_room_config.json', encoding='utf-8'))
ILLEGAL_WORDS = c['illegal_words']
# 跑马灯文字内容 以及是否开启
MARQUEE_CONFIG = c['marquee_config']

# 是否禁言
IS_SHUT_UP = c['is_shut_up']

app = Flask(__name__, static_folder='build', static_url_path='/', template_folder='build')

CORS(app)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=6)
app.config['DEBUG'] = True

jwt = JWTManager(app)
jwt.init_app(app)
# app 设置 jwt 过期时间为6小时


app.config['SECRET_KEY'] = 'secret!'
# 设置跨域访问
# socketio = SocketIO(app, cors_allowed_origins='*')
socketio = SocketIO(app, cors_allowed_origins=["http://localhost:3000", "https://www.com/"])
# socketio = SocketIO(app, cors_allowed_origins='*', async_mode="eventlet")

user_info = find_hash(client, "user", "user_info")
for n in CHAT_SPIDER:
    globals()["{}_message".format(n)] = []


# scoketio上线
def sio(name):
    @socketio.on('connect', namespace="/" + name)
    def connect():
        global Oline
        if request.headers.getlist("X-Forwarded-For"):
            ip = request.headers.getlist("X-Forwarded-For")[0]
        else:
            ip = request.remote_addr
        Oline += 1
        s = ip + request.headers.get('User-Agent')
        # md5 生成 6位随机整数
        md5 = hashlib.md5()
        md5.update(s.encode('utf-8'))
        md5_str = md5.hexdigest()
        md5_int = int(md5_str, 16)
        md5_int = md5_int % 1000000
        now = datetime.datetime.utcnow()

        beijing = datetime.timezone(datetime.timedelta(hours=8))
        t = now.astimezone(beijing)

        msg_time = t.strftime('%Y-%m-%d %H:%M:%S')

        # 判断是否存在于user_info中

        if str(md5_int) in user_info:
            pass

        else:
            # 如果不存在 则添加

            user_info[str(md5_int)] = {
                "user_id": md5_int,
                "user_name": "昵称".format(md5_int),
                "user_ip": ip,
                "login_time": msg_time,
                "msg_time": msg_time,
                "user_agent": request.headers.get('User-Agent')
            }

    @socketio.on('message', namespace="/" + name)
    def message(msg):
        global ILLEGAL_WORDS
        w = 0
        # 判断是否有违法词汇s
        for i2 in ILLEGAL_WORDS:
            # 正则匹配 判断是否有违法词汇
            par = re.compile(i2)
            if par.search(msg):
                print("有违法词汇")
                w += 1

        if w >= 1:
            return
        x = {}
        if request.headers.getlist("X-Forwarded-For"):
            ip = request.headers.getlist("X-Forwarded-For")[0]
        else:
            ip = request.remote_addr

        s = ip + request.headers.get('User-Agent')

        # md5 生成 6位随机整数
        md5 = hashlib.md5()
        md5.update(s.encode('utf-8'))
        md5_str = md5.hexdigest()
        md5_int = int(md5_str, 16)
        md5_int = md5_int % 1000000
        t = time.time()
        local_time = time.localtime(t)

        msg_time = time.strftime("%Y-%m-%d %H:%M:%S", local_time)

        # 判断 msg 是否为 dict

        # try: key error
        #
        if isinstance(msg, dict):
            print(msg)
            x = {
                "user_id": md5_int,
                "user_name": msg['user_name'],
                "msg": msg['msg'],
                "msg_time": msg_time,

            }

        else:
            x = {
                "user_id": md5_int,
                "user_name": "昵称{}".format(md5_int),
                "msg": msg,
                "msg_time": msg_time,

            }

        # try:
        #     x = {
        #         "user_id": md5_int,
        #         "user_name": msg['user_name'],
        #         "msg": msg['msg'],
        #         "msg_time": msg_time,
        #
        #     }
        # except KeyError:
        #     x = {
        #         "user_id": md5_int,
        #         "user_name": "昵称{}".format(md5_int),
        #         "msg": msg,
        #         "msg_time": msg_time,
        #
        #     }

        if not IS_SHUT_UP:
            socketio.emit('message', x, namespace="/" + name)
            # 更新msg_time

            globals()["{}_message".format(name)].insert(0, x)

            user_info[str(md5_int)]["msg_time"] = msg_time

    @socketio.on('disconnect', namespace="/" + name)
    def disconnect():
        global Oline
        Oline -= 1
        print('disconnect')
        print("用户断开连接")

    # error
    @socketio.on_error(namespace="/" + name)
    def error_handler(e):
        print(e)


# online
@app.route('/online')
@cross_origin()
def online():
    return {"code": 200, "msg": "success", "data": Oline}


# get user_info
@app.route('/user_info', methods=['POST'])
@cross_origin()
def get_user_info():
    print(user_info)
    return {"code": 200, "msg": "success", "data": user_info}


# get all message

@app.route('/messages', methods=['POST'])
@jwt_required()
@cross_origin()
def get_messages2():
    chat_username = request.json.get("chat_username")
    page = request.json.get("page")
    if page is None:
        page = 1
    else:
        page = int(page)
    size = request.json.get("size")
    if size is None:
        size = 10
    else:
        size = int(size)

    # 判断是否在CHAT_SPIDER中
    if chat_username in CHAT_SPIDER:

        data = find_all(mgoclient, chat_username, page, size)

        # 返回总数 分页数据 当前页 每页条数
        count = data[0]
        data = data[1]
        return {"code": 200, "msg": "success", "data": data, "count": count, "page": page, "size": size}

    else:
        return {"code": 400, "msg": "chat_username不存在"}


# 删除 I


# 分页查询 ILLEGAL_WORDS
@app.route('/illegal_words', methods=['POST'])
@jwt_required()
@cross_origin()
def get_illegal_words():
    page = request.json.get("page")
    if page is None:
        page = 1
    else:
        page = int(page)
    size = request.json.get("size")
    if size is None:
        size = 10
    else:
        size = int(size)
    data = []
    # 偏移量
    offset = (page - 1) * size
    # 查询数据 ILLEGAL_WORDS
    for i in range(offset, offset + size):
        # 判断是否超出list长度
        if i >= len(ILLEGAL_WORDS):
            break
        data.append(ILLEGAL_WORDS[i])
    # 返回总数 分页数据 当前页 每页条数
    count = len(ILLEGAL_WORDS)

    return {"code": 200, "msg": "success", "data": data, "count": count, "page": page, "size": size}


# 模糊查询 ILLEGAL_WORDS 这个数组中的
@app.route('/illegal_words_like', methods=['POST'])
@jwt_required()
@cross_origin()
def get_illegal_words_like():
    word = request.json.get("word")
    if word is None:
        return {"code": 400, "msg": "参数错误"}
    else:
        # 正则匹配
        pattern = re.compile(word)
        data = []
        for i2 in ILLEGAL_WORDS:
            if pattern.match(i2):
                data.append(i2)
        return {"code": 200, "msg": "success", "data": data}
    pass


##删除单条消息

@app.route('/delete_message', methods=['POST'])
# @jwt_required()
@cross_origin()
def delete_message():
    chat_username = request.json.get("chat_username")
    # 判断是否在CHAT_SPIDER中
    if chat_username in CHAT_SPIDER:
        _id = request.json.get('_id')
        # 判断参数是否为空
        if _id:
            # 删除单条消息
            delete_by_id(mgoclient, _id, chat_username)
            return {"code": 200, "msg": "删除成功"}
        else:
            return {"code": 400, "msg": "参数不能为空"}

    return {"code": 400, "msg": "chat_username不存在"}


# 分页数据
@app.route('/messages_page_size', methods=['POST'])
def get_messages_page():
    try:
        page = request.json.get('page')
        size = request.json.get('size')
        chat_username = request.json.get("chat_username")
        # 判断是否 int



    except KeyError:
        return {"code": 400, "msg": "参数不完整"}

    # 判断是否在CHAT_SPIDER中
    if not isinstance(page, int):
        return {"code": 400, "msg": "page必须为int"}
    if not isinstance(size, int):
        return {"code": 400, "msg": "size必须为int"}
    if chat_username in CHAT_SPIDER:
        print(page, size)
        data = find_all_page(mgoclient, page, size, chat_username)
        return {"code": 200, "msg": "success", "data": data}
    return {"code": 400, "msg": "chat_username不存在"}


# get messages
@app.route('/message', methods=['POST'])
@cross_origin()
def get_messages():
    chat_username = request.json.get("chat_username")
    # 判断是否在CHAT_SPIDER中

    if chat_username in CHAT_SPIDER:

        # 判断是否为空
        if len(globals()["{}_message".format(chat_username)]) == 0:
            return {"code": 200, "msg": "success", "data": []}
        # messages 根据 msg_time 排序

        return {"code": 200, "msg": "success", "data": globals()["{}_message".format(chat_username)]}
    else:
        return {"code": 400, "msg": "{}不存在".format(chat_username)}


# 定时写入 redis
# 每两分钟更新一次

def update_user_info():
    add_hash(client, "user", "user_info", user_info)


def update_messages():
    for i3 in CHAT_SPIDER:
        insert_many(mgoclient, globals()["{}_message".format(i3)], i3)
        globals()["{}_message".format(i3)] = []


for i in CHAT_SPIDER:
    sio(i)


#


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/')
def index2():
    return render_template('index2.html')


# 退出登录 接口  退出删除token

@app.route('/logout', methods=['POST'])
# @jwt_required()
@cross_origin()
def logout():
    # 刷新token

    return {"code": 200, "msg": "退出成功"}


# 条件查询 user_info 分页
@app.route('/user_info_page_size', methods=['POST'])
# @jwt_required()
@cross_origin()
def user_info_page_size():
    users = []
    d = request.json
    for user in user_info:
        print(type(user_info[user]))
        users.append(json.dumps(user_info[user]))



    try:
        page = d['page']
    except KeyError:
        page = 1
    try:
        size = d['size']
    except KeyError:

        size = len(users)
    try:
        # 查询条件
        condition = d['condition']
        print(condition)
    except KeyError:
        condition = ""
        # 如果 condition 为空 则查询全部
    if condition == "":
        # 偏移量

        offset = (page - 1) * size
        # 分页
        # 结束偏移量
        end = offset + size
        # 分页后的数据
        users = users[offset:end]
        print(condition)

        return {"code": 200, "msg": "success", "data": users}

    try:
        # 起始时间
        start_time = d['start_time']
        # 转换成时间戳
        start_time = int(time.mktime(time.strptime(start_time, "%Y-%m-%d %H:%M:%S")))
    except KeyError:
        start_time = ""

    try:
        # 结束时间

        end_time = d['end_time']
        # 转换成时间戳
        end_time = int(time.mktime(time.strptime(end_time, "%Y-%m-%d %H:%M:%S")))
    except KeyError:
        # 现在时间 时间戳
        end_time = int(time.time())
        print(end_time)

    # 如果 condition 不为空 则查询条件
    user2 = []
    # for xx in users:
    #     login_time = xx.get("login_time")
    #     try:
    #
    #         login_time = int(time.mktime(time.strptime(str(login_time), "%Y-%m-%d %H:%M:%S")))
    #     except:
    #         # 等于现在时间
    #         login_time = int(time.time())
    #

    for ix in users:
        x = json.loads(ix)
        login_time = x.get("login_time")
        #判断是否None
        if login_time is None:
            continue

        #转换成时间戳
        login_time = int(time.mktime(time.strptime(str(login_time), "%Y-%m-%d %H:%M:%S")))
        # 判断时间是否在范围内
        #如果开始时间为空
        if start_time == "":
            if login_time <= end_time:
                #判断 是否符合条件
                if condition in x.values():
                    user2.append(x)

        else:
            if start_time <= login_time <= end_time:
                # 判断 是否符合条件

                if condition in x.values():
                    user2.append(x)






    return {"code": 200, "msg": "success", "data": user2}


@app.before_request
def before_request():
    if request.headers.getlist("X-Forwarded-For"):
        ip = request.headers.getlist("X-Forwarded-For")[0]
    else:
        ip = request.remote_addr

    if ip in black_list:
        if black_list[ip] > 7000:
            # 跳转到首页
            return {'code': 401, 'msg': '您的ip已被封禁'}  ##


@app.route('/login', methods=["GET", 'POST'])
def login():
    # 判断请求方法是否为get
    if request.method == 'GET':
        return {'code': 401, 'msg': '请求方法错误'}
    else:

        data = request.get_json()

        # 获取用户名
        try:
            username = data['username']
            # 获取密码
            password = data['password']
        except KeyError:
            return {'code': 202, 'msg': '参数错误'}
        # 判断用户名和密码是否正确
        if username == SUPER_ADMIN['username'] and password == SUPER_ADMIN['password']:
            # 生成token

            access_token = create_access_token(identity=username)
            # 返回token
            return jsonify({"code": 200, "msg": "登录成功", 'access_token': access_token})
        else:
            # 密码错误 次数加一
            if request.headers.getlist("X-Forwarded-For"):
                ip = request.headers.getlist("X-Forwarded-For")[0]
            else:
                ip = request.remote_addr
            # 判断ip是否在黑名单中
            if ip in black_list:
                black_list[ip] += 1

            else:
                black_list[ip] = 1

            return jsonify({"code": 401, "msg": "用户名或密码错误"})


# 修改admin 用户 密码
@app.route('/change_admin', methods=["GET", 'POST'])
@jwt_required()
@cross_origin()
def change_password():
    # 判断请求方法是否为get
    if request.method == 'GET':
        return {'code': 401, 'msg': '请求方法错误'}

    global SUPER_ADMIN

    data = request.get_json()
    try:
        # 获取用户名
        username = data['username']
        # 获取密码
        password = data['password']
    except KeyError:
        return jsonify({"code": 202, "msg": "请求参数错误"})

    # 判断用户名是否为空
    if username == '':
        return jsonify({"code": 202, "msg": "用户名不能为空"})
    # 判断密码是否为空
    if password == '':
        return jsonify({"code": 202, "msg": "密码不能为空"})

    SUPER_ADMIN = {"username": username, "password": password}

    # 写入文件
    try:

        with open('./config/admin.json', 'w', encoding="utf-8") as f:
            json.dump(SUPER_ADMIN, f, ensure_ascii=False)
    except Exception as e:
        print(e)
        return jsonify({"code": 202, "msg": "修改失败"})
    # 清除token

    return jsonify({"code": 200, "msg": "修改成功"})


# 单独修改admin 密码
@app.route('/change_password', methods=["GET", 'POST'])
@jwt_required()
@cross_origin()
def change_password_admin():
    if request.method == 'GET':
        return {'code': 401, 'msg': '请求方法错误'}
    # key error

    data = request.get_json()

    # 获取用密码
    try:
        password = data['password']
    except KeyError:
        return jsonify({"code": 202, "msg": "请求参数错误"})

    # 判断密码是否为空
    if password == '':
        return jsonify({"code": 202, "msg": "密码不能为空"})
    # 修改密码
    global SUPER_ADMIN
    SUPER_ADMIN['password'] = password
    # 写入文件
    try:
        with open('./config/admin.json', 'w', encoding="utf-8") as f:
            json.dump(SUPER_ADMIN, f, ensure_ascii=False)
    except Exception as e:
        print(e)
        return jsonify({"code": 202, "msg": "修改失败"})
    return jsonify({"code": 200, "msg": "修改成功"})


# chat_room_config.json
@app.route('/chat_room_config', methods=['GET', 'POST'])
@cross_origin()
def chat_room_config():
    data = request.get_json()
    try:
        x = data['condition']
        if x == 'illegal_words':
            return jsonify({"code": 200, "msg": "获取成功", "data": ILLEGAL_WORDS})
        elif x == 'is_shut_up':
            return jsonify({"code": 200, "msg": "获取成功", "data": IS_SHUT_UP})
        elif x == 'marquee_config':
            return jsonify({"code": 200, "msg": "获取成功", "data": MARQUEE_CONFIG})
    except KeyError:
        chat_room_config_data = {
            "illegal_words": ILLEGAL_WORDS,
            "is_shut_up": IS_SHUT_UP,
            "marquee_config": MARQUEE_CONFIG

        }

        return jsonify({"code": 200, "msg": "获取成功", "data": chat_room_config_data})




# update_chat_room_config
@app.route('/update_chat_room_config', methods=["GET", 'POST'])
@cross_origin()
@jwt_required()
def update_chat_room_config():
    # 判断请求方法是否为get
    if request.method == 'GET':
        return {'code': 401, 'msg': '请求方法错误'}
    data = request.get_json()

    global ILLEGAL_WORDS
    global IS_SHUT_UP
    global MARQUEE_CONFIG, c

    try:

        ILLEGAL_WORDS = data['illegal_words']
        IS_SHUT_UP = data['is_shut_up']
        MARQUEE_CONFIG = data['marquee_config']
        # 校验数据格式  ILLEGAL_WORDS list IS_SHUT_UP bool  MARQUEE_CONFIG dict
        if not isinstance(ILLEGAL_WORDS, list):
            return jsonify({"code": 202, "msg": "illegal_words不是一个list格式"})
        if not isinstance(IS_SHUT_UP, bool):
            return jsonify({"code": 202, "msg": "is_shut_up不是一个bool格式"})

        if not isinstance(MARQUEE_CONFIG, dict):
            return jsonify({"code": 202, "msg": "marquee_config不是一个dict格式"})





    except KeyError:
        return jsonify({"code": 202, "msg": "请求参数错误"})

    chat_room_config_data = {
        "illegal_words": ILLEGAL_WORDS,
        "is_shut_up": IS_SHUT_UP,
        "marquee_config": MARQUEE_CONFIG

    }
    c = chat_room_config_data
    # 写入文件
    try:

        with open('./config/chat_room_config.json', 'w', encoding="utf-8") as f:
            json.dump(chat_room_config_data, f, ensure_ascii=False)
    except Exception as e:
        print(e)
        return jsonify({"code": 202, "msg": "修改失败"})
    os.system("pm2 restart all")
    return jsonify({"code": 200, "msg": "修改成功"})


# 获取CHAT_SPIDER
@app.route('/get_chat_config', methods=['GET', 'POST'])
@cross_origin()
# @jwt_required()
def get_chats():
    if request.method == 'GET':
        return {'code': 401, 'msg': '请求方法错误'}
    return jsonify({"code": 200, "msg": "获取成功", "data": CHAT_SPIDER})


# 删除CHAT_SPIDER
@app.route('/del_chat_config', methods=['GET', 'POST'])
@cross_origin()
@jwt_required()
def del_chat_config():
    if request.method == 'GET':
        return {'code': 401, 'msg': '请求方法错误'}

    chat_username = request.get_json()['chat_username']
    if chat_username not in CHAT_SPIDER:
        return jsonify({"code": 202, "msg": "该账号不存在"})

    # 拿到word 对应的下标
    index = CHAT_SPIDER.index(chat_username)
    # 删除
    del CHAT_SPIDER[index]
    print(CHAT_SPIDER)

    # 写入文件
    try:
        with open('./config/chat_spider_config.json', 'w', encoding="utf-8") as f:
            json.dump(CHAT_SPIDER, f, ensure_ascii=False)
    except Exception as e:
        print(e)
        return jsonify({"code": 202, "msg": "删除失败"})
    os.system("pm2 restart all")
    return jsonify({"code": 200, "msg": "删除成功"})


# update_chat_spider
@app.route('/update_chat_config', methods=["GET", 'POST'])
@cross_origin()
@jwt_required()
def update_chat_config():
    if request.method == 'GET':
        return {'code': 401, 'msg': '请求方法错误'}
    data = request.get_json()
    global CHAT_SPIDER
    try:
        CHAT_SPIDER = data['chat_spider_config']
        # 校验数据格式
        if not isinstance(CHAT_SPIDER, list):
            return jsonify({"code": 202, "msg": "chat_spider_config不是一个list格式"})
    except KeyError:
        return jsonify({"code": 202, "msg": "请求参数错误"})

    # 写入文件
    try:
        with open('./config/chat_spider_config.json', 'w', encoding="utf-8") as f:
            json.dump(CHAT_SPIDER, f, ensure_ascii=False)
    except Exception as e:
        print(e)
        return jsonify({"code": 202, "msg": "修改失败"})

    os.system("pm2 restart all")
    return jsonify({"code": 200, "msg": "修改成功"})


# run server
if __name__ == '__main__':
    # 设置上海时区
    scheduler = BackgroundScheduler(timezone='Asia/Shanghai')
    # 三分钟运行一次update_user_info
    scheduler.add_job(func=update_user_info, trigger='interval', seconds=180)

    scheduler.add_job(func=update_messages, trigger='interval', seconds=180)

    scheduler.start()

    socketio.run(app, port=8089)
