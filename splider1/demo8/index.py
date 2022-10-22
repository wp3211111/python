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
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "movie.douban.com",
     "origin": "movie.douban.com",
}

page_num = 0
domain = 'https://desk.zol.com.cn'
def download_bizhi():
    url = "https://desk.zol.com.cn/fengjing/"
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
    for item in deskPicList:
        print(item)
        oriSize = item["oriSize"]
        imgSrc = item["imgsrc"]
        img_src = imgSrc.replace('##SIZE##',oriSize)
        img_name = img_src.split("/")[-1]
        download_image(img_src,img_name)
        print(img_src)

def download_image(url,name):
    res = requests.get(url,headers=header)
    content = res.content
    with open(f'./bizhi/{name}',mode='wb') as f:
        f.write(content)

if __name__ == '__main__':
    download_bizhi()
    # get_second_url(temp_url)

		# var deskPicArr 		= {"list":[{"picId":"118975","oriSize":"4576x2955","resAll":["4096x2160","2880x1800","2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkLGJCtcaIa2jGACG-XOBewPIAAB-zAPA3JcAIb50858.jpg"},{"picId":"118976","oriSize":"5242x3499","resAll":["5120x2880","4096x2160","2880x1800","2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkK2JCtc2ICLIrAA0PsSiJA7QAAB-zQM3JFgADQ_J218.jpg"},{"picId":"118977","oriSize":"3000x2000","resAll":["2880x1800","2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkK2JCtdOIPm5RAAkA-CBL4moAAB-zgGc9woACQEQ150.jpg"},{"picId":"118978","oriSize":"3556x2000","resAll":["2880x1800","2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkLGJCtdiIP21SABwHM7LpzmwAAB-zgNMNp8AHAdL446.jpg"},{"picId":"118979","oriSize":"6000x4000","resAll":["5120x2880","4096x2160","2880x1800","2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkK2JCtd-IDIt7ACTMC0R1rtcAAB-zwLNKJcAJMwj565.jpg"},{"picId":"118980","oriSize":"6036x4020","resAll":["5120x2880","4096x2160","2880x1800","2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkLGJCteeIONpTACy0qSfXH84AAB-0AM8EGYALLTB747.jpg"},{"picId":"118981","oriSize":"5397x3598","resAll":["5120x2880","4096x2160","2880x1800","2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkLGJCtfCIKT1WABhen4OWgMoAAB-0QOBfhUAGF63416.jpg"},{"picId":"118982","oriSize":"2560x1707","resAll":["2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkK2JCtfeITazuAAVimfvYno8AAB-0gMBESgABWKx215.jpg"},{"picId":"118983","oriSize":"5477x3651","resAll":["5120x2880","4096x2160","2880x1800","2560x1600","2560x1440","1920x1080","1680x1050","1600x900","1440x900","1366x768","1280x1024","1280x800","1024x768"],"imgsrc":"http:\/\/desk-fd.zol-img.com.cn\/t_s##SIZE##\/g7\/M00\/0F\/0B\/ChMkLGJCtfyILcN0ACVknv6FN08AAB-0wElpmcAJWS2769.jpg"}]};
