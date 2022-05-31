import requests
from ffmpy3 import FFmpeg
import re
header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    "Referer": "https://91kanju.com"
}

n= 1

with open ("摇摆艳霞.m3u8",mode="r") as f2:
        for line in f2:
            line = line.strip()
            if line.startswith("#"):
                continue
            resp4 = requests.get(line,headers=header)
            f3 = open(f"video2/0_{n}.ts",mode="wb")
            f3.write(resp4.content)
            f3.close()
            resp4.close()
            n +=1
            print(f"完成了{n}个")