from time import sleep
import requests
from lxml import etree
import json

requests.packages.urllib3.disable_warnings(
    requests.packages.urllib3.exceptions.InsecureRequestWarning)
url = "https://shanghai.zbj.com/search/f/?kw=python&r=1"

headers = {
    "user-agent" : "Chrome	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36",
    "host" : 'shanghai.zbj.com'
}

def get_text():
    response = requests.get(url,headers=headers,verify=False)
    html = etree.HTML(response.text)
    divs =  html.xpath('//*[@id="__layout"]/div/div/div/div[3]/div[4]/div[1]/div')
    t = etree.tostring(divs[0], encoding="utf-8", pretty_print=True)
    #print(t.decode("utf-8"))
    with open("index.html","w",encoding="utf-8") as f:
        f.write(t.decode("utf-8"))
    list1 = []
    print(len(divs))
    for div in divs:
        price = div.xpath("./div[3]/div[1]/span/text()")[0].strip("¥")
        title = ""+"python"
        com_name = div.xpath("./a/div[2]/div[1]/div/text()")[0]
        # location = div.xpath("./div/div/a[1]/div[1]/div/span/text()")[0]
        reviews_num =  div.xpath("./div[3]/div[2]/div[1]/span[2]/text()")[0]
        sell_number =  div.xpath("./div[3]/div[2]/div[2]/span[2]/text()")[0]
        # print(com_name)
        data = dict(price=price,title=title,com_name=com_name,safdsdfsdf=reviews_num,sell_number=sell_number)
        #json1 = json.dumps(data)
        #dict2 = {'name':'a', 'number':'1'}
        #list1.append(dict2)
        list1.append(data)


    with open('save.json','w',encoding='utf-8') as f:
        print(list1)
        #f.write(list1)
        json.dump(list1,f,ensure_ascii=False)

if __name__ == '__main__':
    get_text()
