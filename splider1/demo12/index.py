from nturl2path import url2pathname
from time import sleep
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import selenium.webdriver as wb
from selenium.webdriver.support.select import Select #select 需要包装
import json
from selenium.webdriver import ActionChains
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

url = "https://login.51job.com"

def move_to_gap(slider,tracks):     # slider是要移动的滑块,tracks是要传入的移动轨迹
    ActionChains(web).click_and_hold(slider).perform()
    for x in tracks:
        ActionChains(web).move_by_offset(xoffset=x,yoffset=0).perform()
    sleep(0.5)
    ActionChains(web).release().perform()
def get_track(distance):      # distance为传入的总距离
    # 移动轨迹
    track=[]
    # 当前位移
    current=0
    # 减速阈值
    mid=distance*4/5
    # 计算间隔
    t=2
    # 初速度
    v=30

    while current<distance:
        if current<mid:
            # 加速度为2
            a=2
        else:
            # 加速度为-2
            a=-2
        v0=v
        # 当前速度
        v=v0+a*t
        # 移动距离
        move=v0*t+1/2*a*t*t
        # 当前位移
        current+=move
        # 加入轨迹
        track.append(round(move))
    return track
web.get(url)
sleep(1)
tab_password_tag = web.find_element_by_xpath('//*[@id="NormalLoginBtn"]/span[3]/a')

tab_password_tag.click()

username_input = web.find_element_by_xpath('//*[@id="loginname"]')
passwprd_input = web.find_element_by_xpath('//*[@id="password"]')
check_box = web.find_element_by_xpath('//*[@id="isread_em"]')
login_btn= web.find_element_by_xpath('//*[@id="login_btn_withPwd"]')
close_btn = web.find_element_by_xpath('//*[@id="Privacy"]/div/span')
username_input.send_keys('')
passwprd_input.send_keys('')
sleep(3)
close_btn.click()
sleep(1)
check_box.click()
sleep(2)
login_btn.click()

sleep(1)
slider_box = web.find_element_by_xpath('/html/body/div[5]/div[2]/div[6]/div/div[1]/div[2]/div[2]')
sleep(2)
move_to_gap(slider_box,get_track(145))
sleep(2)
move_to_gap(slider_box,get_track(35))
sleep(2)
move_to_gap(slider_box,get_track(55))
sleep(2)
move_to_gap(slider_box,get_track(95))
sleep(2)
move_to_gap(slider_box,get_track(15))


# sleep(2)
# move_to_gap(slider_box,get_track(100))
# sleep(2)
# move_to_gap(slider_box,get_track(60))
# sleep(2)
# move_to_gap(slider_box,get_track(320))
