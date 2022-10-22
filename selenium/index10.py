import asyncio
from tkinter import E
from  pyppeteer import launch
import requests
from urllib import request
import cv2
import random

header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "movie.douban.com",
     "origin": "movie.douban.com",
}

async def download_image(url,name):
    res = requests.get(url,headers=header)
    content = res.content
    with open(f'./image/{name}',mode='wb') as f:
        f.write(content)


async def verification_code(page) :
    block_img = await page.Jeval('#slideBlockWrap > img' , 'el=> el.src')
    bg_img  =  await page.Jeval('#slideBgWrap > img' , 'el => el.src')
    request.urlretrieve(block_img,'block_img.png')
    await page.waitFor(2000)
    request.urlretrieve(bg_img,'bg_img.png')
    await page.waitFor(2000)
    dis = await get_dis()
    # 获取滑块元素  相当于js的 querySelector
    el = await page.J('div.#tcaptcha_drag_thumb')
    box = await el.boundingBox()
    # 模拟鼠标移动到滑块元素上
    await page.hover('div.JDJRV-slide-btn')
    # 操作鼠标按下
    await page.mouse.down()

    await page.mouse.move(box['x'] + dis + random.uniform(30,33),box['y'],{'steps' : 30})

    await page.waitFor(random.randint(1000,2000))

    await page.mouse.move(box['x'] + dis + 27,box['y'],{'steps' : 30})
    # 放开鼠标
    await page.mouse.up()

    await page.waitFor(5000)


async def get_dis():
    img_bg = cv2.imread('bg_img.png',0) #读取灰度
    img_block = cv2.imread('block_img.png',0)  #读取灰度

    res = cv2.matchTemplate(img_bg,img_block,cv2.TM_CCOEFF_NORMED) #使用CV2的平方差匹配取值

    value = cv2.minMaxLoc(res)[2][0]  #在数组中找到全局最小值和最大值
    dis = value * 278 / 360
    print(dis)
    return dis
async def main():
    broswer =  await launch(headless = False,args = ['--window-size=1366,768'])
    page = await broswer.newPage()
    await page.setViewport({'width' : 1366, 'height': 768})
    await page.goto('https://preh5-6.one2.cc/#/')

    await page.waitFor(1000) #延时1000毫秒

    username = await page.xpath('//*[@id="app"]/div[1]/div[2]/div[1]/div[2]/form/div[1]/div/div/input')
    await username[0].type('input','robin1')
    password = await page.xpath('//*[@id="app"]/div[1]/div[2]/div[1]/div[2]/form/div[2]/div/div/input')
    await password[0].type('input','1qaz@WSX')



    await page.waitFor(1000)

    await page.click('button.btn-login')

    await page.waitFor(2000)

    await verification_code(page)

    try :
        await page.J('a.JDJRV-close')
        await page.waitFor(1000)
        await verification_code(page)
        print('continue')
    except :
       print('success')
       await page.waitFor(10000)

# 获取一个事件循环直到main函数运行结束
asyncio.get_event_loop().run_until_complete(main())
