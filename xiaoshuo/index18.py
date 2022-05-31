
import asyncio
import json
import aiohttp
import aiofiles
import requests


header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "http://baidu.com/"
}

async def aiodownload(cid,b_id,title):
    data = {
        "book_id" : b_id,
        "cid" : f"{b_id}|{cid}",
        "nedd_bookinfo" : 1
    }
    data = json.dumps(data)
    url2 =  f"http://dushu.baidu.com/api/pc/getChapterContent?data={data}"

    async with aiohttp.ClientSession() as session:
        async with session.get(url2,headers = header) as resp:
            dic = await resp.json()
            async with aiofiles.open(title,mode="w",encoding="utf-8") as f:
                await f.write(dic['data']['novel']['content'])
            



async def  getCatalog(url):
    resp = requests.get(url,headers = header)
    dic = resp.json()
    print(dic)
    tasks = []
    for  item in dic['data']['novel']['items']:
        title = item['title']
        cid  =  item['cid']
        tasks.append(aiodownload(cid,b_id,title))

    await asyncio.wait(tasks)


if __name__ == "__main__":
    b_id = "4306063500"
    url = 'http://dushu.baidu.com/api/pc/getChapterContent?data={"book_id":"'+ b_id+'"}'
    asyncio.run(getCatalog(url))