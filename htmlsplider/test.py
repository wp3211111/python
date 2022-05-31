import requests
import random

# 待测试目标网页
proxies = [
    {'http':'socks5://127.0.0.1:1080'},
    {'http':'socks5://127.0.0.1:1080'}
]
proxies = random.choice(proxies)
print(proxies)
url = 'http://icanhazip.com'
try:
    response = requests.get(url,proxies=proxies) #使用代理
    print(response.status_code)
    if response.status_code == 200:
        print(response.text)
except requests.ConnectionError as e:
    print(e.args)
