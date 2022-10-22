import requests
import os

url = "https://www.kuaishou.com/"
proxies = [
    {'http':'http://18.139.137.97/'},
    {'https':'https://18.139.137.97/'}
]
headers = {
'referer': 'https://www.kuaishou.com/',
'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
}
data = {
    'body' : {}
}
response = requests.get(url=url,headers=headers)

print(response.text)