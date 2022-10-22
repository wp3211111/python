from threading import Thread
# 导入线程池
from concurrent.futures import ThreadPoolExecutor

from lxml import etree
import random
from subprocess import CREATE_NEW_CONSOLE
from time import sleep
import requests
import re
import json
requests.packages.urllib3.disable_warnings(
    requests.packages.urllib3.exceptions.InsecureRequestWarning)
header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
     "Referer": "movie.douban.com",
     "origin": "movie.douban.com",
}

page_num = 0
domain = 'https://desk.zol.com.cn'
def download_bizhi():
    url = "https://desk.zol.com.cn/youxi/"
    resp = requests.get(url,headers=header)
    resp.encoding = 'gb2312'
    text = resp.text
    et = etree.HTML(text)
    herf_list = et.xpath('//li[@class="photo-list-padding"]/a/@href')
    for item in herf_list:
        if 'html' in  item :
            get_second_url(item)
    # print(herf_list)

def get_second_url(url):
    res = requests.get(domain + url,headers=header)
    res.encoding = 'gb2312'
    text2 = res.text
    obj = re.compile(r'var deskPicArr.*?=(?P<deskPicArr>.*?);',re.S)
    result = obj.search(text2)
    deskPicStr = result.group('deskPicArr')
    deskPic = json.loads(deskPicStr)
    deskPicList =  deskPic['list']
    # print(img_src)
    with ThreadPoolExecutor(20) as t:
         for item in deskPicList:
            oriSize = item["oriSize"]
            imgSrc = item["imgsrc"]
            img_src = imgSrc.replace('##SIZE##',oriSize)
            img_name = img_src.split("/")[-1]
            t.submit(download_image,img_src,img_name)
    print('all over')

def download_image(url,name):
    print(f"准备下载{name}")
    res = requests.get(url,headers=header)
    content = res.content
    with open(f'./youxi/{name}',mode='wb') as f:
        f.write(content)
    print(f'{name}下载完毕!')
if __name__ == '__main__':
    download_bizhi()
