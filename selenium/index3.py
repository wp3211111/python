import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import selenium.webdriver as wb
from selenium.webdriver.support.select import Select #select 需要包装
from chaojiying import Chaojiying_Client
from selenium.webdriver.common.action_chains import ActionChains

# chromeoption = webdriver.ChromeOptions()
# chromeoption.add_argument('--no-sandbox')  # 解决linux DevToolsActivePort文件不存在的报错
# chromeoption.add_argument(
#             'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36')

# web = Chrome(chrome_options=chromeoption)
chrome_driver=r'C:\Users\admin\AppData\Local\Programs\Python\Python310\Scripts\chromedriver.exe'
chrome_options = wb.ChromeOptions()
chrome_options.add_experimental_option("excludeSwitches", ['enable-automation'])
chrome_options.add_argument(
            'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36')

web = wb.Chrome(executable_path=chrome_driver,options=chrome_options)

# web.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
#     "source": """
#     Object.defineProperty(navigator, 'webdriver', {
#         get: () => undefined
#     })
#     """
# })
# http://13.229.199.19:8080/login?from=%2Fview%2FhashWeb
url = "http://13.229.199.19:8080/login?from=%2Fview%2FhashWeb"
url1 = "https://www.douyin.com/user/MS4wLjABAAAAybyX38OFlpMWkCw1snZFdF9TqUj4De3djKPza4IoCMs"
url2 = "https://www.chaojiying.com"
web.get(url1)

# print(web.title)



login_ele = web.find_element_by_xpath('//*[@id="login-register"]/a')

ActionChains(web).move_to_element(login_ele).perform()

username_ele = web.find_element_by_xpath('//*[@id="user"]')
password_ele = web.find_element_by_xpath('//*[@id="pass"]')

img = web.find_element_by_xpath('//*[@id="userone"]/section/form/div[3]/div/img').screenshot_as_png

# dic = chaojiying.PostPic(img,1902)
time.sleep(2)
verify = '1234' #dic['pic_str']
print("verify",verify)
verify_code_ele = web.find_element_by_xpath('//*[@id="auth"]')
username_ele.send_keys('wp3211111')
password_ele.send_keys("")



verify_code_ele.send_keys(verify)

btnsubmit = web.find_element_by_xpath('//*[@id="userone"]/section/form/div[6]/button')

btnsubmit.click()

