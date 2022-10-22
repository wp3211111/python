from bson import encode
import requests
import re
import os
import csv
import gzip

filename = "music\\"

if not os.path.exists(filename):
    os.mkdir(filename)

url = "https://music.163.com/discover/toplist?id=3778678"

headers = {
'referer': 'https://music.163.com/',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
}
response = requests.get(url,headers=headers)
html_data = re.findall('<li><a href="/song\?id=(\d+)">(.*?)</a>',response.text)
for num_id,title in  html_data:
    downloadurl = f'https://music.163.com/song/media/outer/url?id={num_id}.mp3'
    music_content = requests.get(url=downloadurl,headers=headers).content
    with open(filename + title + '.mp3',mode='wb') as fs:
        fs.write(music_content)



# buf = BytesIO(response.json())
# fzip = gzip.GzipFile(fileobj=buf)
# text = fzip.read().decode()
#print(html_data)
# re.findall()
# num_id = 34280405
# downloadurl = f'https://music.163.com/song/media/outer/url?id={num_id}.mp3'
# music_content = requests.get(url=downloadurl,headers=headers).content
# with open(filename + title + '.mp3',mode='wb') as fs:
    
#     fs.write(music_content)