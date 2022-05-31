# --------------------------------------------------------------------
# Copyright (c) iEXBase. All rights reserved.
# Licensed under the MIT License.
# See License.txt in the project root for license information.
# --------------------------------------------------------------------

from telegram import KeyboardButton, ReplyKeyboardMarkup

keyboard_p1 = [
    [
        KeyboardButton("Top Accounts"),
        KeyboardButton("Price"),
        KeyboardButton("Stats")
    ],
    [KeyboardButton("Create Account")]
]
reply_markup_p1 = ReplyKeyboardMarkup(keyboard_p1, True, False)
reply_markup_p1 =  {'keyboard': [[{'text': '/topaccounts'}, {'text': '/price'}, {'text': '/stats'}], [{'text': '/createaccount'}]], 'selective': False, 'resize_keyboard': True, 'one_time_keyboard': False}
