import requests
import re
import os

headers = {
    "Accept-Encoding": "Gzip",  # 使用gzip压缩传输数据让访问更快
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0",
    }

# 搜索页面数据
def get_text(keyword,page):
    url = f'https://www.pkdoutu.com/search?type=photo&more=1&keyword={keyword}&page={page}'
    # 请求数据
    resp = requests.get(url,headers=headers)
    # 去掉非字符
    text = re.sub('\s','',resp.text)
    return text
def down_meme(keyword):
    # 由于表情较多，这里只取10页（也有接近700左右）
    pages = 10
    num = 0
    for page in range(1,pages+1):
        text = get_text(keyword,page)
        # print("text",text)
        # 表情包区域  r'"data-original="(.*?)"'
        # print("text",text)
        search_result = re.findall(r'<divclass="search-resultlist-group-item">(.*)</div>',text)[0]
        # print("search_result",search_result)
        # 表情包下载地址

        #  cle
        meme_urls = re.findall(r'"data-original="(.*?)"',search_result)
        
       
         
        # 下载每页的表情包
        for url in meme_urls:
            num += 1
            # 表情包文件名
            meme_name = re.findall(r'https://img.pkdoutu.com/.*/(.*)',url)[0]
            
            print("meme_name",meme_name)

            meme_img = requests.get(url)
            # 表情包内容 bytes 格式
            meme = meme_img.content
            # 写入本地（判断关键字文件夹是不是存在，不存在则创建一个）
            if not os.path.exists(f'./{keyword}'):
                os.mkdir(f'./{keyword}')
                
            with open(f'./{keyword}/{meme_name}','wb') as f:
                f.write(meme)
                
            print(f'{num} 个 {keyword} 表情包已经下载...')

if __name__ == "__main__":
    # keyword = '呵呵'
    keyword =  input('请输入你想查询的表情包：')
    down_meme(keyword)