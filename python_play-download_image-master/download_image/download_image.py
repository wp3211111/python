import argparse
from DownloadImage import DownloadImage
from lxml import etree as et
from urllib.parse import *
import requests
import os
class ImageList(object):
    finish_list = set()
    ready_list= set()

    headers = {
        # 用户代理
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }
    def __init__(self,url,runCount=20):
        self.runCount=int(runCount)
        self.start=0
        self.url = url
        self.urlParse=urlparse(self.url)
        self.ready_list.add(url)
    def run(self):
        while len(self.ready_list)>0:
            url = self.ready_list.pop()
            self.ready_list.discard(url)
            self.getUrls(url)
            self.downloadImage(url)
        #
    def getUrls(self,url):
        response = requests.get(url, headers=self.headers)
        if(response.status_code==200):
            html = et.HTML(response.text)
            urls = html.xpath('//a/@href')
            for newUrl in urls:
                if not self.isRootUrls(urljoin(self.url,newUrl)):
                    continue
                if newUrl not in self.ready_list and newUrl not in self.finish_list:
                    self.ready_list.add(urljoin(self.url,newUrl))
    def downloadImage(self,url):
        #执行download_page
        obj = DownloadImage(url, None)
        # 过滤格式
        obj.run()
        self.start =self.start+1
        #判断是否为同一域名下
    def isRootUrls(self,url):
        newUrl=urljoin(self.url,url)
        urlp=urlparse(newUrl)
        if urlp.netloc == self.urlParse.netloc:
            return True
        else:
            return False
def getArgv():
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--uri', dest='Url', type=str, default='root', help='target Url')
    parser.add_argument('-n', '--num', dest='Num', type=str, default='20', help='target runCount')
    args= parser.parse_args()
    return args.Url,args.Num

if __name__ == '__main__':
    url,runNum = getArgv()
    obj=ImageList(url,runNum)
    obj.run()