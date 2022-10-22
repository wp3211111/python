import requests


proxys  = {
    "http" : "120.237.144.57:9091",
}

header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "http://icanhazip.com/"
}

dic_url = "http://icanhazip.com/"

resp = requests.get(dic_url,proxies=proxys)
print(resp.text)
