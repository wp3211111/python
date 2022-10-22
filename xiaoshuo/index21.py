from operator import mod
import requests
from bs4 import BeautifulSoup 
import re
import asyncio
import json
import aiohttp
import aiofiles


header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    "Referer": "https://91kanju.com"
}

def get_iframe_src(url):
    resp = requests.get(url,headers=header)
    main_page = BeautifulSoup(resp.text,"html.parser")
    src = main_page.find("iframe").get("src")
    return src

def get_frist_m3u8url(url):
    resp = requests.get(url,headers=header)
    obj = re.compile(r'var main = "(?P<m3u8_url>.*?)"',re.S)
    m3u8_url = obj.search(resp.text).group("m3u8_url")
   
    return m3u8_url

def download_m3u8_file(url,name):
    resp = requests.get(url,headers=header)
    with open(name,mode="wb") as f:
        f.write(resp.content)

async def download_ts(ts_url,name,session):
    async with session.get(ts_url) as resp:
        async with aiofiles.open(f"video2/{name}",mode="wb") as f :
            await f.write(await resp.content.read())
    print(f"{name}下载完毕")

async def aio_download(up_url):
    tasks = []
    async with aiohttp.ClientSession as session:
        async with aiofiles.open("越狱第二m3u8.txt",mode="r",encoding="utf-8") as f:
            async for line in f:
                if(line.startswith("#")):
                    continue

                line = line.strip()
                ts_url = up_url + line
                task = asyncio.create_task(download_ts(ts_url,line,session))
                tasks.append(task)
            await asyncio.wait(tasks)

def get_key(url):
    resp = requests.get(url,headers=header)
    # print(resp.text)
    return resp.text

def dec_ts(file,key):
    pass


async def aio_decode(key):
    async with open("越狱第二m3u8.txt",mode="r",encoding="utf-8") as f :
        tasks = []
        async for line in f:
                if(line.startswith("#")):
                    continue

                line = line.strip()
                task = asyncio.create_task(dec_ts(line,key))
                tasks.append(task)
        await asyncio.wait(tasks)



def main(url):
    iframe_src = get_iframe_src(url)
    print("iframesrc",iframe_src)
    frist_m3u8url =  get_frist_m3u8url(iframe_src)
    print("frist_m3u8url",frist_m3u8url)
    domain = iframe_src.split("/share")[0]
    frist_url = domain + frist_m3u8url
    download_m3u8_file(frist_url,"越狱.txt")
    with open("越狱.txt",mode="r",encoding="utf-8") as f1:
        for line in f1:
            if(line.startswith("#")):
                continue
            else:
                line = line.strip()
                second_m3u8_url = frist_m3u8url.split("index.m3u8")[0] + line
                download_m3u8_file(second_m3u8_url,"越狱第二m3u8.txt")

    second_m3u8_url_up =   second_m3u8_url.replace("index.m3u8","")
    asyncio.run(aio_download(second_m3u8_url_up))

    key_url = second_m3u8_url_up + "key.key"
    key = get_key(key_url)

    asyncio.run(aio_decode(key))



if __name__ == "__main__":
    url = "https://www.91kanju.com/vod-play/541-2-1.html"
    main(url)