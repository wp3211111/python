import requests
import re
import csv

url = "https://dytt89.com"

headers = {
    "user-agent" : "Chrome	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
}
response = requests.get(url,headers=headers,verify=False)
response.encoding = "gb2312"
page_content = response.text

obj1 = re.compile(r'2022必看热片.*?<ul>(?P<ul>.*?)</ul>',re.S)
obj2 = re.compile(r"<a href='(?P<href>.*?)'",re.S)
obj3 = re.compile(r'◎片　　名(?P<name>.*?)<br />.*?'
r'<td style="WORD-WRAP: break-word" bgcolor="#fdfddf"><a href="(?P<download>.*?)">'
,re.S)



f = open("movie.csv",mode="w",encoding="utf-8")
csvwriter = csv.writer(f)


result = obj1.finditer(page_content)

chrild_href_list = []
for it in result:
    ul = it.group("ul")
    result2 = obj2.finditer(ul)
    for itt in result2:
        href = itt.group("href")
        chrild_href = url + href
        chrild_href_list.append(chrild_href)

        #print("`~~~~~~~",href)

for href in chrild_href_list:
    chrild_response = requests.get(href,headers=headers,verify=False)
    chrild_response.encoding = "gb2312"
    chrild_content = chrild_response.text
    print(chrild_content)
    chrild_result = obj3.search(chrild_content)
    csvwriter.writerow(chrild_result.group("name"))
    #csvwriter.writerow(chrild_result.group("download"))
    # print(chrild_result.group("name"))
    # print(chrild_result.group("download"))