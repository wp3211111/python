import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import selenium.webdriver as wb
from selenium.webdriver.support.select import Select #select 需要包装

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
web.get("http://13.229.199.19:8080/login?from=%2Fview%2FhashWeb")

print(web.title)

input_box = web.find_element_by_xpath('//*[@id="j_username"]')

password_box = web.find_element_by_xpath('/html/body/div/div/form/div[2]/input')

time.sleep(3)

# 切换窗口
# web._switch_to.window(web.window_handles[-1])
# web._switch_to.window(web.window_handles[0]) 回到原来窗口

# 如果是iframe 需要先拿到frame 然后再切换iframe
# iframe = web.find_element_by_xpath("/html/../..")
# web.switch_to.frame(iframe)  div = web.find_element_by_xpath("/html/../..")
# web.switch_to.default_content() 切回原窗口
# sel = Select(sel_el)
# for i in range(len(sel))
#

#输入内容：selenium
input_box.send_keys('H5')
password_box.send_keys("123456",Keys.ENTER)

time.sleep(2) 

betbranch = web.find_element_by_xpath('//*[@id="job_HashBetH5"]/td[3]/a')

betbranch.click()

time.sleep(1)

build_box = web.find_element_by_xpath('//*[@id="tasks"]/div[5]/a[2]')

build_box.click()

input_tag_box = web.find_element_by_xpath('//*[@id="main-panel"]/form/table/tbody[1]/tr[1]/td[3]/div/input[2]')

input_tag_box.send_keys('RLS_20220527T1417_22031401')

time.sleep(1)

build_btn = web.find_element_by_xpath('//*[@id="yui-gen4-button"]')

build_btn.click()



