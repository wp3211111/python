import datetime
import json
import time

from pyrogram import Client
from socketIO_client import SocketIO, LoggingNamespace


# socket io client
# client socket io
socketio = SocketIO('localhost', 3000)

api_id = ""
api_hash = ""
phone = "+"

# 打开 spider.json 文件
CHAT_SPIDER = list(json.load(open('./chat_spider_config.json', encoding='utf-8')))



print(api_id)
app = Client("my_account", api_id=api_id, api_hash=api_hash, phone_number=phone)

io = socketio()

CHAT_SPIDER2 = []
# 遍历 CHAT_SPIDER 列表 给每个元素开头加上/
for i in CHAT_SPIDER:
    CHAT_SPIDER2.append('/' + i)

#io.connect(url='localhost:3000', transports=["polling"], namespaces=CHAT_SPIDER2)

#



time.sleep(5)
print("start")







# io.emit("message", msg, namespace="/BetU_DSJC")


@app.on_message()
def echo(client, message):


    # 转为北京时间
    t = time.time()
    t = datetime.datetime.fromtimestamp(t) + datetime.timedelta(hours=8)

    t = t.strftime('%Y-%m-%d %H:%M:%S')

    chat_name = message.chat.username

    if message.text == None:
        return

    if chat_name in CHAT_SPIDER:

        msg = {}
        msg['user_name'] = '🤖BetU机器人🤖'
        msg['msg'] = message.text
        io.emit('message', message.text,namespace="/" + chat_name)
        print("sucssss")
        print(chat_name)
#
app.run()

# io.disconnect()
