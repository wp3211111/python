from nturl2path import url2pathname
import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import selenium.webdriver as wb
from selenium.webdriver.support.select import Select #select 需要包装
import json
# chromeoption = webdriver.ChromeOptions()
# chromeoption.add_argument('--no-sandbox')  # 解决linux DevToolsActivePort文件不存在的报错
# chromeoption.add_argument(
#             'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36')
# print("Enter your username:")
# username = input()
# print("Enter your password:")
# password = input()
# print("please waiting ................................:")
# web = Chrome(chrome_options=chromeoption)
chrome_driver=r'C:\Users\admin\AppData\Local\Programs\Python\Python310\Scripts\chromedriver.exe'
chrome_options = wb.ChromeOptions()
chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])
chrome_options.add_argument(
            'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36')

web = wb.Chrome(executable_path=chrome_driver,options=chrome_options)

web.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": """
    Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined
    })
    """
})

url = "https://www.zhipin.com/?city=100010000&ka=city-sites-100010000"


web.get(url)
inputSearch = web.find_element_by_xpath('//*[@id="wrap"]/div[3]/div/div[1]/div[1]/form/div[2]/p/input')
searchBtn = web.find_element_by_xpath('//*[@id="wrap"]/div[3]/div/div[1]/div[1]/form/button')
inputSearch.send_keys('前端python')
time.sleep(1)
searchBtn.click()

