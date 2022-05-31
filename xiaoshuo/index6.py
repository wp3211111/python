import requests
from lxml import etree
url = "https://shanghai.zbj.com/search/f/?kw=python+"

headers = {
    "user-agent" : "Chrome	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
}
response = requests.get(url,headers=headers,verify=False)

# print(response.text)

html = etree.HTML(response.text)

divs =  html.xpath("/html/body/div[6]/div/div/div[2]/div[5]/div[1]/div")

for div in divs:
    price = div.xpath("./div/div/a[2]/div[2]/div[1]/span[1]/text()")[0].strip("¥")
    title = "".join(div.xpath("./div/div/a[2]/div[2]/div[2]/p/text()"))+"python"
    com_name = div.xpath("./div/div/a[1]/div[1]/p/text()")[0]
    location = div.xpath("./div/div/a[1]/div[1]/div/span/text()")[0]
    print(location)
