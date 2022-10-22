import requests
from bs4 import BeautifulSoup
url = "http://www.xinfadi.com.cn/index.html"
headers = {
    "user-agent" : "Chrome	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
}
response = requests.get(url,headers=headers,verify=False)
# print(response.text)
page = BeautifulSoup(response.text,"html.parser")
tbody = page.find("tbody",id="ulTableBody")
print(tbody)
# ulTableBody

