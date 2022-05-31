import requests
import re
import csv


url = "https://movie.douban.com/top250"
headers = {
    "user-agent" : "Chrome	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
}
response = requests.get(url,headers=headers)

page_content = response.text

obj = re.compile(r'<li>.*?<div class="item">.*?<span class="title">(?P<name>.*?)'
r'</span>.*?<p class="">.*?<br>(?P<year>.*?)&nbsp.*?'
r'<span class="rating_num" property="v:average">(?P<rating>.*?)</span>.*?'
r'<span>(?P<evaluation>.*?)人评价</span>'
,re.S)

result = obj.finditer(page_content)
#print(result)

f = open("data.csv",mode="w",encoding="utf-8")

csvwriter = csv.writer(f)

for it in result:
    dict = it.groupdict()
    dict["year"] = dict["year"].strip()
    csvwriter.writerow(dict.values())

f.close()
print("over")










