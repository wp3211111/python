import requests
from lxml import etree
import pymongo


def get_one_page(url):
    headers = {
       'User-Agent' :    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    }
    params = {
       'requestCode' : '27707b9ff150f56b2b2f21eaac8438b5y0adt'
    }
    res = requests.get(url,headers=headers,params=params)
    if res.status_code == 200:
        return res.text
    return None

def main():
    url = 'https://www.maoyan.com/'
    html = get_one_page(url)
    html = etree.parse(html, etree.HTMLParser())
    result = html.xpath('//*[@id="app"]/div/div[2]/div/div[1]/div[2]/dl/dd[1]/div/a')
    print(result)

main()
