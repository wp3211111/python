import requests

seasion = requests.session()

url = "https://passport.17k.com/ck/user/login"

data = {
    "loginName" : "18614075987",
    "password" : "q6035945"
}

resp  = seasion.post(url,data=data)

print(resp.text)

resp2 = seasion.get("https://user.17k.com/ck/author/shelf?page=1&appKey=2406394919")

print(resp2.json())
