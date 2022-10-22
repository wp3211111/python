import requests
import re
import os
import parsel

filename = "book\\"

if not os.path.exists(filename):
    os.mkdir(filename)


headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
}

url = 'http://www.biqge.info/book/16917/'

response = requests.get(url=url,headers=headers)
selector = parsel.Selector(response.text)
book_name = selector.css("#info h1::text").get()
href_list = selector.css("#list dd a::attr(href)").getall()
for href in href_list:
    link_url = "http://www.biqge.info/" + href
    response_branch =  requests.get(url=link_url,headers=headers)
    sel1 = parsel.Selector(response_branch.text)
    chapter_name = sel1.css(".bookname h1::text").get()
    chapter_content = sel1.css("#content::text").getall()
    content = "\n".join(chapter_content)
    with open (filename + chapter_name + '.txt','a',encoding='utf-8') as f:
        f.write(chapter_name)
        f.write('\n')
        f.write(content)
        f.write('\n')
#print(response.text)
