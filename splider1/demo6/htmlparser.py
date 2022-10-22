from ast import IsNot
from base64 import encode
from html.parser import HTMLParser
import re
import requests
import parsel
requests.packages.urllib3.disable_warnings(
    requests.packages.urllib3.exceptions.InsecureRequestWarning)
url = 'https://w2.heiyan.com/book/149074/12715039'
headers = {
    "user-agent" : "Chrome	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
}

class MyHTMLParser(HTMLParser):
  a_t=False
  def handle_starttag(self, tag, attrs):
    #print("开始一个标签:",tag)
    if str(tag).startswith("script"):
      print(tag)
      self.a_t=True
      for attr in attrs:
        if attr !=  None:
            list1 = list(attr)
            adress = list1[1]
            if "?" in adress:
                adress = adress.split('?')[0]
                res = requests.get(url+adress,headers=headers,verify=False)
                # print("  属性值：",list1)
                with open(adress,"w",encoding="utf-8") as f:
                    f.write(res.text)
                # print("  text",res.text)
            else :
                res = requests.get(url+adress,headers=headers,verify=False)
                # print("  属性值：",list1)
                with open(adress,"w",encoding="utf-8") as f:
                    f.write(res.text)

  def handle_endtag(self, tag):
    if tag == "script":
      self.a_t=False
      #print("结束一个标签:",tag)

  def handle_data(self, data):
    if self.a_t is True:
      print("得到的数据: ",data)


def download_url(url):
    response = requests.get(url,headers=headers,verify=False)
    response.encoding = 'utf-8'
    data =  response.text
    selector = parsel.Selector(response.text)
    book_name = selector.css(".page-title .sm-title::text").get()
    chapter_name = book_name.strip()
    href_list = selector.css("#chapterDiv .page-content p::text").getall()
    content = "\n".join(href_list)
    with open ('大宋_江山战图_' + chapter_name + '.txt','a',encoding='utf-8') as f:
      f.write(book_name)
      f.write('\n')
      f.write(content)
      f.write('\n')
    next_url = selector.css(".next a::attr(href)").get()
    if next_url is None:
       pass
    else :
      download_url(next_url)

def  main():
    download_url(url)

    # str_data = data

    # # p=MyHTMLParser()
    # # p.feed(str_data)
    # # print("str_data",str_data)
    # with open("index.html","w",encoding="utf-8") as f:
    #     f.write(str_data)


if __name__ == '__main__':
    main()



