import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import selenium.webdriver as wb
from selenium.webdriver.support.select import Select #select 需要包装
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
url = "https://www.betu88.com"
url1 = "https://www.douyin.com/user/MS4wLjABAAAAybyX38OFlpMWkCw1snZFdF9TqUj4De3djKPza4IoCMs"
url2 = "https://www.chaojiying.com"
web.get(url)

print(web.title)
time.sleep(2)

close_x = web.find_element_by_xpath('/html/body/div[2]/div/div/div/div[2]')
close_x2 = web.find_element_by_xpath('//*[@id="login-pannel"]/div[2]')
close_x.click()
close_x2.click()


print(web.title)
print("web",web)
