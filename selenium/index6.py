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

url = "https://www.lagou.com/"


web.get(url)

close_btn = web.find_element(by='//*[@id="cboxClose"]')
time.sleep(1)
close_btn.click()

time.sleep(2)
input_btn = web.find_element(by='//*[@id="search_input"]')
search_btn = web.find_element(by='//*[@id="search_button"]')

time.sleep(1)
input_btn.send_keys('python')#Keys.ENTER
time.sleep(1)
search_btn.click()
time.sleep(2)
job_list = web.find_element(by='position__21iOS')

list1 = []

for item in job_list:
    item.click()
    web.switch_to.window(web.window_handles[-1]) #切换到倒数第一个窗口
    #
    jobName = web.find_element(by='job-name').text
    jobRequest = web.find_element('job_request').text
    jobAdvantage = web.find_element('job-advantage').text
    jobBt = web.find_element('job_bt').text
    jobAddress = web.find_element('job-address').text

    dict1 = {
        'jobName' : jobName,
        'jobRequest' : jobAddress,
        'jobAdvantage' : jobAdvantage,
        'jobBt'  :  jobBt,
        'jobAddress' : jobAddress

    }
    list1.append(dict1)

    #
    web.close()
    web.switch_to.window(web.window_handles[0]) #切换原先列表页面
    time.sleep(2)
print('遍历完了`````')
with open ('python职位详情' '.json','a',encoding='utf-8') as f:
    json.dump(list1,f,ensure_ascii=False) #支持中文编码
print('文件写入完毕!')


# url_page = 'https://www.lagou.com/wn/jobs?pn=1&fromSearch=true&kd=python'
# def get_page_info(url):
#     pass
