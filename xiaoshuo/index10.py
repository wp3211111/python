import requests

url = "https://m10.music.126.net/20220512142327/c7738f3c585bf8e0f2e1c848f2f2c64b/ymusic/8282/098a/d744/be1e1d3c2a46b4cbd259aca7ff050cd3.mp3"


proxys  = {
    "http" : "124.71.113.37:9000",
    "hppts" :  "39.130.150.42:80"
}

header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "http://icanhazip.com/"
}

resp = requests.get(url,headers=header,proxies=proxys)

with open("你的酒馆对我打了烊.mp3","wb") as f:
    f.write(resp.content)
    print("下载完毕")

f.close()

