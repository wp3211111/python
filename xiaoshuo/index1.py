import requests
import parsel

url = "https://www.shuquge.com/txt/38478/index.html"
url2 = "https://www.shuquge.com/txt/38478/5806957.html"


def main():
    #get_index_directory(url)
    num = int(input('请输入一个十进制的整数'))
    print(num,"的二进制数为:",bin(num))
    print("%s的二进制数为:%s" % (num,bin(num)))
    print(str(num)+"的二进制数为:"+bin(num))
    print("{0}的二进制数为:{1}".format(num,bin(num)))
    print(f"{num}的二进制数为:{bin(num)}")


def get_index_directory(url):
    response = requests.get(url)
    response.encoding = response.apparent_encoding
    #print(response.text)

    index_sel = parsel.Selector(response.text)

    links = index_sel.css("dd a::attr(href)").extract()

    for link in links:
        content_url = "https://www.shuquge.com/txt/38478/"+link
        get_every_cotent(content_url)

def get_every_cotent(url):
    response = requests.get(url)
    response.encoding = response.apparent_encoding
    #print(response.text)

    index_sel = parsel.Selector(response.text)

    links = index_sel.css("dd a::attr(href)").extract()

def save_text(html):
    pass



if __name__ == '__main__':
    main()
    
