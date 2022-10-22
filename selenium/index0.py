import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
from chaojiying import Chaojiying_Client
import requests
from hashlib import md5
from selenium.webdriver.common.action_chains import ActionChains


web = Chrome()

headers = {
    'Connection': 'Keep-Alive',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
}

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

url2 = "https://www.chaojiying.com"
web.get(url2)

login_ele = web.find_element_by_xpath('//*[@id="login-register"]/a')

ActionChains(web).move_to_element(login_ele).perform()

username_ele = web.find_element_by_xpath('//*[@id="user"]')
password_ele = web.find_element_by_xpath('//*[@id="pass"]')
username_ele.send_keys('wp3211111')
password_ele.send_keys("")
img = web.find_element_by_xpath('//*[@id="userone"]/section/form/div[3]/div/img').screenshot_as_png

base_params = init('wp3211111','','')
print(img)
# dic = chaojiying.PostPic(img,1902)
dic = PostPic(base_params,img,1902)

# dic = chaojiying.PostPic(img,1902)

time.sleep(2)
print("dic",dic)
verify = dic['pic_str']
if verify == "":
   verify = 1234

print("verify",verify)
verify_code_ele = web.find_element_by_xpath('//*[@id="auth"]')


verify_code_ele.send_keys(verify)

btnsubmit = web.find_element_by_xpath('//*[@id="userone"]/section/form/div[6]/button')

btnsubmit.click()


