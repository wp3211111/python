# https://91kanju.com/vod-play/12884-3-1.html 抓取视频
import requests
import re
import asyncio
import aiohttp
import aiofiles


n  = 1
async def  getCatalog(url):
    tasks = []
    tasks.append(aiodownload(url))
    await asyncio.wait(tasks)

async def aiodownload(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url,headers = header) as resp:
            dic = await resp.content
            async with aiofiles.open(f"video/{n}.ts",mode="wb") as f:
                await f.write(dic)
                n += 1





url = "https://91kanju.com/vod-play/12884-3-1.html"
obj = re.compile(r"url: '(?P<url>.*?)',",re.S)
obj2 = re.compile(r"/(?P<url2>.*?index.m3u8)",re.S)
header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    "Referer": "https://91kanju.com"
}

resp = requests.get(url,headers=header,verify=False)

print(resp.text)

m3u8_url = obj.search(resp.text).group("url")
# /20220505/RUnWTAqo/1100kb/hls/index.m3u8
frontm3u8_url = "https://v4.cdtlas.com/"
print("第一个地址",m3u8_url)
resp2 = requests.get(m3u8_url,headers=header)
str2  =  str(resp2.content)
if "index.m3u8" in str2 :
    m3u8_url2 = obj2.search(resp2.text).group("url2")
    whole_url = frontm3u8_url + m3u8_url2
    print(whole_url)
    resp3 = requests.get(whole_url,headers=header)
    with open ("惊天大逆转.m3u8",mode="wb") as f:
        f.write(resp3.content)
        resp2.close()
    print("下载完毕")
    with open ("惊天大逆转.m3u8",mode="r") as f2:
        for line in f2:
            line = line.strip()
            if line.startswith("#"):
                continue
            resp4 = requests.get(line,headers=header)
            f3 = open(f"video/{n}.ts",mode="wb")
            f3.write(resp4.content)
            f3.close()
            resp4.close()
            n +=1
            print("完成了{n}个")
            #asyncio.run(getCatalog(line))



