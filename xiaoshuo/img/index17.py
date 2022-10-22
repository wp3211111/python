# 异步请求 aiohttp

import asyncio
import aiohttp

urls = ["http://kr.shanghai-jiuxin.com/file/2022/0516/4a6cb28051510574e862f92018bc93c8.jpg","http://kr.shanghai-jiuxin.com/file/2022/0516/4e578c68e5667c82ed064a99ecf59512.jpg","http://kr.shanghai-jiuxin.com/file/2022/0516/54961375fa73aaaed3d0ea615a59a09a.jpg"]
# resp.content.read()
# resp.text()
# resp.json()
# session.post()
header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",

}


async def aiodownload(url):
   name = url.rsplit("/", 1)[1]
   async with aiohttp.ClientSession() as session:
       async with session.get(url,headers=header) as resp:
            with open(name, mode="wb") as f:
                f.write(await resp.content.read())

async def main():
    tasks = []
    for url in urls:
        tasks.append(aiodownload(url))
    await asyncio.wait(tasks)




if __name__ == "__main__":
   asyncio.run(main())

