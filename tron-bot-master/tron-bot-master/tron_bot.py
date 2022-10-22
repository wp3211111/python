# --------------------------------------------------------------------
# Copyright (c) iEXBase. All rights reserved.
# Licensed under the MIT License.
# See License.txt in the project root for license information.
# --------------------------------------------------------------------

import logging
from decimal import Decimal

import datetime  # 导入datetime模块
import threading as thd

import requests
import telegram
import schedule
import time
from telegram import (
    InlineKeyboardButton,
    InlineKeyboardMarkup,
)
from telegram.ext import (
    CommandHandler,
    Updater,
    callbackcontext,
    MessageHandler,
    CallbackQueryHandler,
    run_async,
    Filters,
    ConversationHandler,
    RegexHandler
)
from tronapi import Tron

from tronapi_bot import (
    constants,
    views,
    helpers
)
from tronapi_bot.helpers import (
    text_simple,
    get_contract_type,
    currency
)
from tronapi_bot.keyboards import (
    reply_markup_p1
)

# initial tron-api-python
tron = Tron(
    full_node=constants.TRON_FULL_NODE,
    solidity_node=constants.TRON_SOLIDITY_NODE
)

# Enabled logging
logging.basicConfig(
    level=logging.DEBUG,
    format=constants.LOG_FORMATTER
)
logger = logging.getLogger()

CHOOSING, TYPING_REPLY, TYPING_CHOICE = range(3)


def validate(update, context):
    """Check TRON address"""
    address = ' '.join("args")
    context.bot.send_message(
        chat_id=update.message.chat_id,
        text=tron.isAddress(address)
    )


def tx(update, context):
    """Get transaction details"""

    tx_id = ''.join(" ")
    context.bot.send_message(
        chat_id=update.message.chat_id,
        parse_mode=telegram.ParseMode.MARKDOWN,
        text=_tx_view(tx_id)
    )


def price(update, context):
    """Get the latest TRON course from CoinMarketCap"""

    context.bot.send_message(
        chat_id=update.message.chat_id,
        parse_mode=telegram.ParseMode.MARKDOWN,
        text=_price_view()
    )


def accounts(update, context):
    """Top 10 Accounts with large balances"""

    context.bot.send_message(
        chat_id=update.message.chat_id,
        parse_mode=telegram.ParseMode.MARKDOWN,
        text=_accounts_view()
    )


def block(update, context):
    """Get information on the block"""
    context.bot.send_message(
        chat_id=update.message.chat_id,
        parse_mode=telegram.ParseMode.MARKDOWN,
        text="2e1e322324234324234"
    )


def balance(update, context):
    """Get a balance at"""
    data = ' '.join("").split(' ')
    try:
        info = currency(tron.trx.get_balance(data[0], True))
    except Exception as e:
        info = str(e)

    context.bot.send_message(
        chat_id=update.message.chat_id,
        parse_mode=telegram.ParseMode.MARKDOWN,
        text=info
    )


def last_transactions(update, context):
    """Get last 10 transactions"""

    data = requests.get(
        constants.API_TRONSCAN + '/transaction?sort=-timestamp&count=true&limit=10&start=0'
    ).json()

    keyboard = []
    for tx in data['data']:
        keyboard.append([
            InlineKeyboardButton(tx['hash'], callback_data=tx['hash'])
        ])

    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text(
        text='Last 10 transactions',
        reply_markup=reply_markup
    )


def createaccount(update, context):
    """Generate new address"""

    context.bot.send_message(
        chat_id=update.message.chat_id,
        parse_mode=telegram.ParseMode.MARKDOWN,
        text=_create_account_view()
    )


def stats(update, context):
    """Get statistics Blockchain TRON"""

    context.bot.send_message(
        chat_id=update.message.chat_id,
        parse_mode=telegram.ParseMode.MARKDOWN,
        text=_statistics_view()
    )


def dapps(update, context):
    keyboard = [
        [InlineKeyboardButton("TRONAccelerator Winners", callback_data='dapps_0')],
        [InlineKeyboardButton("Games", callback_data='dapps_games')],
        [InlineKeyboardButton("Exchangers", callback_data='dapps_exchangers')],
        [InlineKeyboardButton("Gambling", callback_data='dapps_gambling')],
        [InlineKeyboardButton("Collectibles", callback_data='dapps_collectibles')],
        [InlineKeyboardButton("Other", callback_data='dapps_other')],
        [InlineKeyboardButton("Statistics", callback_data='dapps_stat')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    update.message.reply_text(
        parse_mode=telegram.ParseMode.MARKDOWN,
        text='Select a category',
        reply_markup=reply_markup
    )


@run_async
def start(update, context):
    #
    # print("```````````````````````````````````````",context)
    context.bot.send_message(chat_id=update.message.chat_id, text="""
        💵 666哈希娱乐领跑者💵\n
        去中心化钱包—转账—到平台地址进行投注\n
        无需绑定银行卡,无限制,即投即开,中奖6秒返\n
        📱下注地址：http://www.666666hash.com/\n
        💵68哈希娱乐最新优惠✅\n
        🎁活动一：每天游戏达到10局送88trx . 满勤7日送888trx \n
        （不计输赢但最低投注100trx或10usdt）\n
        💰每天投注10局送218trx,满勤7日送1188trx\n
        每局最低投注300trx或30usdt）\n
        （🎁活动二：连赢再赢 额外大奖\n
        连赢6次，奖励6次投注总额的10%\n
        连赢8次，奖励8次投注总额的20%\n
        连赢12次，奖励12次投注总额的30%\n
        连赢18次，奖励18次投注总额的50%\n
        连赢20次，奖励20次投注总额的100%\n
        🎁活动三：周累计投注奖励\投注10万U奖励：188.88USDT\n
        投注30万U奖励：388.88USDT\n
        投注50万U奖励：588.88USDT\n
        投注100万U奖励：888.88USDT\n
        TRX投注奖励×10倍同上兑现\n
        🎁活动四：玩家救济金（负分）奖励\n
        负1000U以上2%，负5000U以上3%\n
        负20000以上4%，负50000以上5%\n
        🎁活动五：1.代理抽盈利50%佣金✅2.下线投注流水0.5%奖励✅\n
        钱包地址资金100万U+备用资金500万U\n
        （链上可查）点击以下地址，到波场链上查看资金\n
        TRpwDVSY7Ytedu4dZ1Yu4VxNuszU688888\n
        不论你是玩家还是代理，投注时请查询平台的收款地址资金，如果庄家资金量小，请不要投注，避免无法提现。\n
        所有活动联系在线客服进行申请！祝您游戏愉快
    """)



    usr_name = update.message.from_user.first_name
    if update.message.from_user.last_name:
        usr_name += ' ' + update.message.from_user.last_name

    text_response = views.BASE_START_TEXT.format(
        user_name=usr_name
    )

    # t1=threading.Timer(10,function=sendmessage(update,context) )  # 创建定时器
    # t1.start()  # 开始执行线程
    context.bot.send_message(
        text_response,
        parse_mode="Markdown",
        reply_markup=reply_markup_p1
    )

    # return CHOOSING


def help(update, context):
    """Assistant when working with the bot"""
    print("reply_markup_p1",reply_markup_p1)
    context.bot.send_message(
        chat_id=update.message.chat_id,
        parse_mode=telegram.ParseMode.MARKDOWN,
        text=_manual(),
        reply_markup=reply_markup_p1
    )


def _manual():
    """Instructions and commands"""
    return views.HELP_VIEW


def _statistics_view():
    """TRON detailed statistics template"""

    base = requests.get(constants.API_TRONSCAN + '/stats/overview?limit=1').json()
    nodes = requests.get(constants.SERVER_TRON_API + '/node/nodemap?total=1').json()
    detail = base['data'][-1]

    text = views.STATS_VIEW.format(
        nodes=str(nodes['total']),
        height=str(detail['totalBlockCount']),
        total_tx=str(detail['totalTransaction']),
        total_accounts=str(detail['totalAddress']),
        new_block_height=str(detail['newBlockSeen']),
        new_accounts=str(detail['newAddressSeen']),
        new_tx=str(detail['newTransactionSeen']),
        time=helpers.date_format(detail['date'])
    )
    return text


def _create_account_view():
    """Template for creating a new address"""

    result = tron.create_account
    text = views.CREATE_ACCOUNT.format(
        address=result.address.base58,
        privateKey=result.private_key,
        publicKey=result.public_key
    )

    return text


def _block_view(block_id):
    """Template for getting the details of the block

    Args:
        block_id (str): Block ID (example: latest, 123444, hash)

    """

    # If no block number is specified
    if not block_id:
        block_id = 'latest'

    try:
        result = tron.trx.get_block(block_id)

        header = result['block_header']['raw_data']
        text = views.BLOCK_VIEW.format(
            id=result['blockID'],
            height=str(header['number']),
            time=helpers.date_format(header['timestamp']),
            count=str(len(result['transactions'])),
            parent=header['parentHash'],
            version=str(header['version']),
            witness=tron.address.from_hex(header['witness_address']).decode("utf-8")
        )
        return text
    except Exception:
        return {
            'text': 'Sorry, block not found',
            'reply_markup': None
        }


def _accounts_view():
    """Template for getting information about TOP 10 addresses with large balances"""

    data = requests.get(
        constants.API_TRONSCAN + '/account/list?sort=-balance&limit=10&start=0'
    ).json()['data']

    text = ''
    for account in data:
        text += views.ACCOUNTS_VIEW.format(
            address=account['address'],
            balance=currency(tron.fromSun(account['balance']))
        )
    return text


def _price_view():
    """Template for get the current exchange rate and cryptocurrency volumes TRON"""

    data = requests.get(constants.URL_COINMARKET_API_TRON).json()['data']
    data_usd = data['quotes']['USD']
    data_btc = data['quotes']['BTC']

    return views.PRICE_VIEW.format(
        price='{:.3f}'.format(data_usd['price']),
        price_btc='{:.8f}'.format(data_btc['price']),
        rank=data['rank'],
        market_cap=currency(data_usd["market_cap"]),
        volume_24h=currency(data_usd["volume_24h"])
    )


def _tx_view(tx_id):
    """Template for obtaining transaction details

    Args:
        tx_id (str): Transaction ID

    """

    data = requests.get(constants.API_TRONSCAN + "/transaction-info?hash=" + tx_id).json()
    text = "Sorry, the transaction could not be found."

    token = 'TRX'
    amount = 0
    contract_type = get_contract_type(data['contractType'])

    if data['contractType'] == 1:
        amount = tron.fromSun(data['contractData']['amount'])
    elif data['contractType'] == 44:
        amount = tron.fromSun(data['contractData']['quant'])
    elif data['contractType'] == 4:
        amount = tron.fromSun(data['contractData']['votes'][0]['vote_count'])
        token = 'TP'
    elif data['contractType'] == 11:
        amount = tron.fromSun(data['contractData']['frozen_balance'])
    else:
        if 'amount' in data['contractData']:
            amount = data['contractData']['amount']

    if data['contractType'] not in [4, 12, 31]:
        if 'token' in data['contractData']:
            token = data['contractData']['token']

    # Статус транзакции
    status = "UNCONFIRMED"
    if data['confirmed']:
        status = "CONFIRMED"

    text = views.TX_VIEW.format(
        hash=str(data['hash']),
        status=status,
        block=str(data['block']),
        time=helpers.date_format(data['timestamp']),
        owner_address=data['ownerAddress'],
        to_address=data['toAddress'],
        value=currency(amount),
        contract_type=contract_type,
        token=token
    )

    return text
def sendmessage (update,context):
    #print("sendmessagesendmessagesendmessagesendmessagesendmessagesendmessagesendmessagesendmessagesendmessagesendmessagesendmessage")
    bot = context.bot
    query = update.callback_query
    bot.send_message(chat_id=query.message.chat_id, text="""
        💵 666哈希娱乐领跑者💵\n
        去中心化钱包—转账—到平台地址进行投注\n
        无需绑定银行卡,无限制,即投即开,中奖6秒返\n
        📱下注地址：http://www.666666hash.com/\n
        💵68哈希娱乐最新优惠✅\n
        🎁活动一：每天游戏达到10局送88trx . 满勤7日送888trx \n
        （不计输赢但最低投注100trx或10usdt）\n
        💰每天投注10局送218trx,满勤7日送1188trx\n
        每局最低投注300trx或30usdt）\n
        （🎁活动二：连赢再赢 额外大奖\n
        连赢6次，奖励6次投注总额的10%\n
        连赢8次，奖励8次投注总额的20%\n
        连赢12次，奖励12次投注总额的30%\n
        连赢18次，奖励18次投注总额的50%\n
        连赢20次，奖励20次投注总额的100%\n
        🎁活动三：周累计投注奖励\投注10万U奖励：188.88USDT\n
        投注30万U奖励：388.88USDT\n
        投注50万U奖励：588.88USDT\n
        投注100万U奖励：888.88USDT\n
        TRX投注奖励×10倍同上兑现\n
        🎁活动四：玩家救济金（负分）奖励\n
        负1000U以上2%，负5000U以上3%\n
        负20000以上4%，负50000以上5%\n
        🎁活动五：1.代理抽盈利50%佣金✅2.下线投注流水0.5%奖励✅\n
        钱包地址资金100万U+备用资金500万U\n
        （链上可查）点击以下地址，到波场链上查看资金\n
        TRpwDVSY7Ytedu4dZ1Yu4VxNuszU688888\n
        不论你是玩家还是代理，投注时请查询平台的收款地址资金，如果庄家资金量小，请不要投注，避免无法提现。\n
        所有活动联系在线客服进行申请！祝您游戏愉快
    """)
#
#
#
#

#
#
#
#
#
#

#
#
#

#

#
#
#

#

#
    return sendmessage(update,context)

def callback_data(update, context):
    bot = context.bot
    query = update.callback_query

    if query.data in constants.DAPPS_CAT:
        result = requests.get(helpers.dapps_category(query.data)).json()

        text = ''
        for item in result['data']['data']:

            text += views.DAPP_PREVIEW.format(
                name=helpers.format_html(item['name']),
                tagline=helpers.format_html(item['tagline']),
                version=str(item['ver']),
                developer=helpers.format_html(item['developer']),
                total=str(item['totalTransaction'])
            )

        bot.send_message(
            text=text,
            chat_id=query.message.chat_id,
            parse_mode=telegram.ParseMode.MARKDOWN
        )

    if query.data in ['dapps_stat']:
        total = requests.get(constants.DAPPS_API + '/statistic/total').json()['data']
        info = requests.get(constants.DAPPS_API + '/statistic/cate/info').json()

        text = views.DAPP_STAT.format(
            total=helpers.format_price(total['dappCount']),
            dau=helpers.format_price(total['dau']),
            transactions=helpers.format_price(total['transactionCount']),
            volume=helpers.format_price(total['amount']),
            smart_contract=helpers.format_price(total['contractCount']),
        )

        for item in info['data']:
            text += views.DAPP_STAT_CAT.format(
                category=helpers.get_dapp_categories(item['category']),
                dapp_count=helpers.format_price(item['dappCount']),
                mau=helpers.format_price(item['mau']),
                transactions=helpers.format_price(item['transactionCount']),
                smart_contract=helpers.format_price(item['contractCount']),
            )

        bot.send_message(
            text=text,
            chat_id=query.message.chat_id,
            parse_mode=telegram.ParseMode.MARKDOWN
        )

    if len(query.data) == 64:
        bot.edit_message_text(
            text=_tx_view(query.data),
            chat_id=query.message.chat_id,
            parse_mode=telegram.ParseMode.MARKDOWN,
            message_id=query.message.message_id
        )


@run_async
def filter_text_input(update, context):
    print("`````````````````````````````filter_text_input`````````````````````````````",update)
    bot = context.bot
    usr_msg_text = update.message.text
    dict_to_request = text_simple(usr_msg_text)

    # Get transaction information by ID
    if dict_to_request == 'transaction':
        update.message.reply_text(
            parse_mode=telegram.ParseMode.MARKDOWN,
            text=_tx_view(usr_msg_text)
        )
    # Get top 10 accounts
    elif dict_to_request == 'topaccounts':
        update.message.reply_text(
            parse_mode=telegram.ParseMode.MARKDOWN,
            text=_accounts_view()
        )
    # Get lasted TRON course
    elif dict_to_request == 'price':
        update.message.reply_text(
            parse_mode=telegram.ParseMode.MARKDOWN,
            text=_price_view()
        )
    # Create new account
    elif dict_to_request == 'createaccount':
        update.message.reply_text(
            parse_mode=telegram.ParseMode.MARKDOWN,
            text=_create_account_view()
        )
    # Get stats
    elif dict_to_request == 'stats':
        update.message.reply_text(
            parse_mode=telegram.ParseMode.MARKDOWN,
            text=_statistics_view()
        )
    else:
        update.message.reply_text(
            text='You did not fill out all the fields, try again. /help',
            reply_markup=None
        )

    return CHOOSING


def error(  update, context, error):
    """Log Errors caused by Updates."""
    logger.warning('Update "%s" caused error "%s"', update, error)


def fn(update,context):
    sendmessage(update,context)
    thd.Timer(10,fn).start()


# def run():
#     print("每隔10秒执行")
#     sendmessage()
#     schedule.erver(10).seconds.do(run)
#     schedule.every(1).minutes.do(run)    # 每隔十分钟执行一次任务
#     # schedule.every().hour.do(run)         # 每隔一小时执行一次任务
#     # schedule.every().day.at("10:30").do(run)  # 每天的10:30执行一次任务
#     # schedule.every().monday.do(run)  # 每周一的这个时候执行一次任务
#     # schedule.every().wednesday.at("13:15").do(run) # 每周三13:15执行一次任务

# def job1():
#     print("I'm working for job1")
#     time.sleep(2)
#     print("job1:", datetime.datetime.now())

# def job2():
#     print("I'm working for job2")
#     time.sleep(2)
#     print("job2:", datetime.datetime.now())

# def job1_task():
#     threading.Thread(target=job1).start()

# def job2_task():
#     threading.Thread(target=job2).start()

# def run():
#     schedule.every(10).seconds.do(job1_task)
#     schedule.every(10).seconds.do(job2_task)

#     while True:
#         schedule.run_pending()
#         time.sleep(1)
def main():

    # Run the TRON bot

    # We create EventHandler and we transfer a token.
    updater = Updater(constants.BOT_TOKEN)
    # Get the dispatcher to register handlers
    dp = updater.dispatcher
    dp
    # callback query
    updater.dispatcher.add_handler(CallbackQueryHandler(callback_data))

    start_handler = ConversationHandler(
        entry_points=[CommandHandler('start', start)],

        states={
            CHOOSING: [
                RegexHandler(
                    '^(Create Account|Price|Stats|Top Accounts)$',
                    filter_text_input
                ),

                RegexHandler(
                    '^(Last Transactions)$',
                    last_transactions
                ),

                RegexHandler(
                    '^[0-9a-zA-Z]{64}$',
                    filter_text_input
                ),
            ]
        },

        fallbacks=[
            RegexHandler('^Help', help)
        ]
    )

    # commands
    dp.add_handler(start_handler)
    dp.add_handler(CommandHandler('help', help))
    dp.add_handler(CommandHandler('tx', tx, pass_args=True))
    dp.add_handler(CommandHandler("validate", validate, pass_args=True))
    dp.add_handler(CommandHandler("price", price))
    dp.add_handler(CommandHandler("block", block))
    dp.add_handler(CommandHandler("balance", balance, pass_args=True))
    dp.add_handler(CommandHandler("accounts", accounts))
    dp.add_handler(CommandHandler("lasttransactions", last_transactions))
    dp.add_handler(CommandHandler("createaccount", createaccount))
    dp.add_handler(CommandHandler("stats", stats))
    dp.add_handler(CommandHandler('dapps', dapps))






    # messages
    # dp.add_handler(MessageHandler(Filters.text, filter_text_input))

    # log all errors
    dp.add_error_handler(error)
    # Run the bot
    updater.start_polling()

    # Run the bot until the you presses Ctrl-C or the process receives SIGINT,
    # SIGTERM or SIGABRT. This should be used most of the time, since
    # start_polling() is non-blocking and will stop the bot gracefully.
    updater.idle()







if __name__ == '__main__':
    main()
