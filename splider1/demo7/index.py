
import random
from subprocess import CREATE_NEW_CONSOLE
from time import sleep
import requests
import re
import json
requests.packages.urllib3.disable_warnings(
    requests.packages.urllib3.exceptions.InsecureRequestWarning)
header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "movie.douban.com",
     "origin": "movie.douban.com",
}
num = 0
page_num = 0
list1 = []
iplist=[]
with open("ip代理.txt") as f:
    iplist = f.readlines()
#获取ip代理
def getip():
    proxy= iplist[random.randint(0,len(iplist)-1)]
    proxy = proxy.replace("\n","")
    proxies={
        'http':'http://'+str(proxy),
        #'https':'https://'+str(proxy),
    }
    return proxies
def download_douban(page_no):
    global num
    url = "http://movie.douban.com/top250?start="+str(page_no)+"&filter="
    print(getip())
    try :
        resp = requests.get(url,headers=header)
        resp.encoding = 'utf-8'
        text = resp.text
        print(text)
        # with open('douban.html',mode='w',encoding='utf-8') as  f:
        #     f.write(text)
        retest = re.compile(r'<div class="item">.*?<span class="title">(?P<name>.*?)</span>'
                            r'.*?<br>(.*?)&nbsp;.*?<span class="rating_num" property="v:average">'
                            r'(?P<score>.*?)</span>.*?<span>(?P<people>.*?)人评价</span>',re.S)
        iter = retest.finditer(text)
        for result in iter:
            dict_data = result.groupdict()
            list1.append(dict_data)
        num = num + 1
        print(num)
        print(list1)
        page_num = num * 25
        print(page_num)
        sleep(8)
        if num > 9 :
            with open ('豆瓣电影top250' '.json','a',encoding='utf-8') as f:
                json.dump(list1,f,ensure_ascii=False) #支持中文编码
                return
        else:
            download_douban(page_num)
    except :
         print('出错了')
         download_douban(page_num)



if __name__ == '__main__':
    download_douban(page_num)


    # with open('douban.html',mode='w',encoding='utf-8') as  f:
#     f.write(text)
#print(resp.text)



