import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
from chaojiying import Chaojiying_Client
import requests
from hashlib import md5
from selenium.webdriver import ActionChains
import selenium.webdriver as wb

chrome_driver=r'C:\Users\admin\AppData\Local\Programs\Python\Python310\Scripts\chromedriver.exe'
chrome_options = wb.ChromeOptions()
chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])
chrome_options.add_argument(
            'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36')


chrome_options.add_argument('--disable-blink-features=AutomationControlled')
web = wb.Chrome(executable_path=chrome_driver,options=chrome_options)
web.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": """
    Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined
    })
    """
})
headers = {
    'Connection': 'Keep-Alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
}
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
    v=160

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
def move_to_gap(slider,tracks):     # slider是要移动的滑块,tracks是要传入的移动轨迹
    ActionChains(web).click_and_hold(slider).perform()
    for x in tracks:
        ActionChains(web).move_by_offset(xoffset=x,yoffset=0).perform()
    time.sleep(0.5)
    ActionChains(web).release().perform()

def init( username, password, soft_id):
    username = username
    password = password.encode('utf8')
    password = md5(password).hexdigest()
    soft_id = soft_id
    base_params = {
        'user': username,
        'pass2':password,
        'softid':soft_id,
    }
    
    return base_params

def PostPic(base_params,im, codetype):
    """
    im: 图片字节
    codetype: 题目类型 参考 http://www.chaojiying.com/price.html
    """
    params = {
        'codetype': codetype,
    }
    params.update(base_params)
    files = {'userfile': ('ccc.jpg', im)}
    r = requests.post('http://upload.chaojiying.net/Upload/Processing.php', data=params, files=files, headers=headers)
    return r.json()

url2 = "https://kyfw.12306.cn/otn/resources/login.html"
web.get(url2)

username_ele = web.find_element_by_xpath('//*[@id="J-userName"]')
passwork_ele = web.find_element_by_xpath('//*[@id="J-password"]')
username_ele.send_keys('78621770@qq.com')
passwork_ele.send_keys("")

login_ele =  web.find_element_by_xpath('//*[@id="J-login"]')

login_ele.click()
time.sleep(1)
slider_box = web.find_element_by_xpath('//*[@id="nc_1_n1z"]')

move_to_gap(slider_box,get_track(330))


time.sleep(5)

popbtn_box = web.find_element_by_xpath('/html/body/div[2]/div[7]/div[2]/div[3]/a')


popbtn_box.click()

subway_input = web.find_element_by_xpath('//*[@id="search-input"]')

subway_input.send_keys('G2')

time.sleep(2)

search_result = web.find_element_by_xpath('//*[@id="toolbar_Div"]/div[1]/div[1]/div/div/div/div/div[1]/ul/li')

search_result.click()

time.sleep(2)

web._switch_to.window(web.window_handles[-1])

time.sleep(2)

search_result_btn = web.find_element_by_xpath('//*[@id="toolbar_Div"]/div[3]/div[1]/div/a')

for i in range(999999):
    search_result_btn.click()
    time.sleep(2)

#dic = PostPic(base_params,img,1902)





   
