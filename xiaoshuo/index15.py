# 多线程跑新发地菜价
import requests
from lxml import etree
import csv
from concurrent.futures import ThreadPoolExecutor
f = open("data2.csv",mode="w",encoding="utf-8")

csvwriter = csv.writer(f)
header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "https://www.pearvideo.com/video_1761790"

}

def download_one_page(url):
    resp = requests.get(url,headers=header)
    resp.encoding = "utf-8"
    html = etree(resp.text)
    print(html)
    table = html.xpath("/html/body/div[2]/div[4]/div[1]/table")[0]
    #trs = table.xpath("./tr")[1:]
    trs = table.xpath("./tr[position()>1]")

    for tr in trs:
        txt = tr.xpath("./td/text()")
        txt = (item.replace("\\","").replace("/","") for item in txt)
        csvwriter.writerow(txt)

if __name__ == "__main__" :
    with ThreadPoolExecutor(50) as t:
        for i in range(1,200): # 199 * 20 = 3980
            t.submit(download_one_page,f"http://www.xinfadi.com.cn/marketanalysis/0/list/{i}.shtml")
    print("50个线程跑完了")
