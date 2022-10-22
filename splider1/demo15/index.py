import asyncio
from lib2to3.pgen2.pgen import DFAState
import loguru
import pandas as pd
import pyppeteer
import requests

class Wph():
    def __init__(self,url,key):
        self.url = url
        self.key = key
        self.default = lambda x : x[0] if x else ''
        self.headers = {
        'User-Agent' :    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
        }


    def request(self,url):
        res = requests.get(url,params={'keyword' : self.key},headers=self.headers,verify=False)
        if  res.ok :
            return res

    async def main(self) :
        pass


    def spider(self) :
        df = pd.DataFrame(columns=['品牌','标题','原价','现价','折扣'])
        res = self.request(self.url)

if __name__ == '__main__' :
    key = '潜水'
    url =- "https://category.vip.com/suggest.php?keyword={}".format(key)
    crawl = Wph(url,key)
    crawl.spider()
