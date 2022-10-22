from pyrogram import Client,filters
from pyrogram.raw import functions
import time
import asyncio


api_id = "10784110"
api_hash = "f80eb8448570f4c2603c2cba270575a6"
phone = "+639690426800"
bot_token = "5333242052:AAFaPMzq_AM846S7eZP9mkq7FIQraWDDhwE"

app = Client("cluotest", api_id=api_id, api_hash=api_hash, phone_number=phone)


def sleeptime(hour, min, sec):
    return hour * 3600 + min * 60 + sec

-1001638690463
async def main():
    async with Client("cluotest", api_id, api_hash) as app:
        second = sleeptime(0, 0, 5)
        while 1 == 1:
            time.sleep(second)
            await app.send_message('blood_bl00d','哈哈')
            # await app.send_message("UI6666668", "🤖我是皮皮，我是大皮皮傻子！🤖")


asyncio.run(main())
