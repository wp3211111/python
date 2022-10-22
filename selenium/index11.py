import requests
from bs4 import BeautifulSoup

import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import selenium.webdriver as wb
from selenium.webdriver.support.select import Select #select 需要包装
import json
import cv2



proxys  = {
    "http" : "114.239.149.47:9999",
}

chrome_driver=r'C:\Users\admin\AppData\Local\Programs\Python\Python310\Scripts\chromedriver.exe'
chrome_options = wb.ChromeOptions()
chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])
chrome_options.add_argument(
            'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36')



chrome_options.add_argument("--proxy-server=114.239.149.47:9999")



#
web = wb.Chrome(executable_path=chrome_driver,options=chrome_options)

web.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": """
    Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined
    })
    """
})

# web.implicitly_wait(1)

try :
    #url = "https://www.37lop6.com:9663/entry/login"
    #url = "http://icanhazip.com"
    url = "http://httpbin.org/ip"
    #url = "https://www.lightfinance.co.uk/home"
    web.get(url)

    time.sleep(5)
except :
    print(123213)
