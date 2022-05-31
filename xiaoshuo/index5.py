import requests
from bs4 import BeautifulSoup  
import os
url = "https://umei.cc/bizhitupian/diannaobizhi"
base_url = "https://umei.cc"
headers = {
    "user-agent" : "Chrome	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
}
resp = requests.get(url,headers=headers,verify=False)
resp.encoding = "utf-8"
page = BeautifulSoup(resp.text,"html.parser")

aList = page.find("ul", class_="pic-list").find_all("a")
for a in aList:
    href = a.get("href")
    child_url = base_url+ href
    child_resp = requests.get(child_url,headers=headers,verify=False)
    child_resp.encoding = "utf-8"
    child_page = child_resp.text
    child_page_text = BeautifulSoup(child_page,"html.parser")
    img_src = child_page_text.find("section",class_="img-content").find("img").get("src")
    #print(img_src)
    header1 = headers
    header1["referer"] = img_src
    header1["origin"] = base_url
    img_resp =  requests.get(img_src,headers=headers,verify=False)
    img_name = img_src.split("/")[-1]
    img_content = img_resp.content
    if not os.path.exists(f'./img'):
        os.mkdir(f'./img')
    with open(img_name,"wb") as f:
        f.write(img_content)
    


