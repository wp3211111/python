import datetime
import json
import time
import asyncio
from pyrogram import Client
from socketIO_client import SocketIO, LoggingNamespace

# socket io client
# client socket io
 # socketio = SocketIO('localhost', 3000)

api_id = "10381874"
api_hash = "974b5c6bc1b103e02884003167a161f5"
phone = "+639916941932"
bot_token = "5333242052:AAFaPMzq_AM846S7eZP9mkq7FIQraWDDhwE"
# 打开 spider.json 文件
CHAT_SPIDER = list(json.load(open('./chat_spider_config.json', encoding='utf-8')))


# async def main():
#     async with Client("my_account", api_id, api_hash) as app:
#         await app.send_message("me", "Greetings from **Pyrogram**!")


# asyncio.run(main())

# print(api_id)
app = Client("highend", api_id=api_id, api_hash=api_hash, phone_number=phone)
#app.run()
# # io = socketio()

# CHAT_SPIDER2 = []
# # 遍历 CHAT_SPIDER 列表 给每个元素开头加上/
# for i in CHAT_SPIDER:
#     CHAT_SPIDER2.append('/' + i)

# # io.connect(url='localhost:3000', transports=["polling"], namespaces=['cluotest'])




# time.sleep(5)
# print("start")







# # io.emit("message", msg, namespace="/BetU_DSJC")

def sleeptime(hour, min, sec):
    return hour * 3600 + min * 60 + sec


# 这是隔5秒执行一次
# 过滤频道 和 转发用户
list_id=["zoksf46","WJwaiweinv"]
filter_username_list = ["hzh626"]

@app.on_message()
def echo(client, message):
        print(message)
        # app.send_message(message.chat.username,'🤖机器人🤖')
        if message.chat.username in  list_id :
            if message.video  and message.video.mime_type == "video/mp4":
                 app.send_video('robinvanpelt',message.video.file_id)
                # app.send_message('robinvanpelt',message.video)
            # second = sleeptime(0, 0, 5)
            # while 1 == 1:
            #     time.sleep(second)
           # app.send_message('robinvanpelt',message.text)
                # app.send_message('shhddxg',message.text)
            #     # 转为北京时间
            # t = time.time()
        # t = datetime.datetime.fromtimestamp(t) + datetime.timedelta(hours=8)

        # t = t.strftime('%Y-%m-%d %H:%M:%S')

        # chat_name = message.chat.username

        # if message.text == None:
        #     return

        # if chat_name in CHAT_SPIDER:

        #     msg = {}
        #     msg['user_name'] = '🤖机器人🤖'
        #     msg['msg'] = message.text
        #     # io.emit('message', message.text,namespace="/" + chat_name)
        #     print("sucssss")
        #     print(chat_name)
#
app.run()

