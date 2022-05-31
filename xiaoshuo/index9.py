import requests


proxys  = {
    "http" : "http://39.130.150.42:80",
    "hppts" :  "https://39.130.150.42:80"
}

header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "http://icanhazip.com/"
}

dic_url = "http://icanhazip.com/"

resp = requests.get(dic_url,proxies=proxys)
print(resp.text)