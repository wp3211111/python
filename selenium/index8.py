import requests
from bs4 import BeautifulSoup

import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import selenium.webdriver as wb
from selenium.webdriver.support.select import Select #select 需要包装
import json
import cv2


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

web.implicitly_wait(1)
url = "https://i.qq.com/"


web.get(url)

time.sleep(5)
# 找到iframe
login_frame = web.find_element_by_xpath('//*[@id="login_frame"]')
# 切换iframe
web.switch_to.frame(login_frame)
time.sleep(1)

password_login = web.find_element_by_xpath('//*[@id="switcher_plogin"]')

time.sleep(1)
print(password_login)
password_login.click()


time.sleep(2)


username_input = web.find_element_by_xpath('//*[@id="u"]')
userpassword_input = web.find_element_by_xpath('//*[@id="p"]')

username_input.send_keys('78621770@qq.com')
userpassword_input.send_keys('123423423')

time.sleep(1)

login_btn = web.find_element_by_xpath('//*[@id="login_button"]')

login_btn.click()

time.sleep(3)

url2 = 'https://t.captcha.qq.com/'



web.switch_to.frame(web.find_element_by_xpath('//*[@id="tcaptcha_iframe_dy"]'))




# 下载原图

# 对比图片
def FindPic (bg="./bg.png",block = './block.png'):
    # 读取图片
    target_rbg = cv2.imread(bg)
    # 进行灰度处理
    target_gray = cv2.cvtColor(target_rbg,cv2.COLOR_BGR2GRAY)
    # 读取图片
    template_rgb = cv2.imread(block,0)
    # 匹配缺口在背景图位置
    res = cv2.matchTemplate(target_gray,template_rgb,cv2.TM_CCOEFF_NORMED)
    # 获取最差和最佳匹配
    value = cv2.minMaxLoc(res)

    print(value)

    return value[2][0]











