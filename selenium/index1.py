import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys

web = Chrome()

web.get("http://cshhapp.me/")

print(web.title)

el = web.find_element_by_id('openSchemeLink')
print(el)
el.click()

el2 = web.find_element_by_xpath('/html/body/div[4]/div[1]/div[1]/div[3]/div[3]/div')

el2.click()
time.sleep(3)
input_box = web.find_element_by_xpath('//*[@id="app"]/div[1]/div[2]/div[1]/div[2]/form/div[1]/div/div/input')
password_box = web.find_element_by_xpath('//*[@id="app"]/div[1]/div[2]/div[1]/div[2]/form/div[2]/div/div/input')
    #输入内容：selenium
input_box.send_keys('robin111')
password_box.send_keys("123456",Keys.ENTER)

time.sleep(5)
img_box = web.find_element_by_xpath('//*[@id="tcaptcha-img"]')

img_box.click()

