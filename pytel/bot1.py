
from telegram import Bot
from telegram.ext import Updater
import telegram
bot_token = "5333242052:AAFaPMzq_AM846S7eZP9mkq7FIQraWDDhwE"

if __name__ == '__main__':
    bot = Bot(token=bot_token)
    count = bot.getChatMemberCount('-1001406136941')
    telegram.getChatMember(chat_id,user_id)
    print(count)
    updater = Updater(token=bot_token,workers=100)
    dp = updater.dispatcher
    print('working')

