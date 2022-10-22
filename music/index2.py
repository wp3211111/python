from asyncio import selector_events
from turtle import title, width
import requests
import re
import os
import parsel
import urllib.request

filename = "music_zhoujielun\\"

if not os.path.exists(filename):
    os.mkdir(filename)


headers = {
    'referer': 'https://www.kugou.com/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
}
def get_response(html_url):
    response = requests.get(url=html_url,headers=headers)
    selector = parsel.Selector(response.text)
    # list_name = selector.css(".pc_rank_sidebar li a::attr(title)").getall()
    # list_href = selector.css(".pc_rank_sidebar li a::attr(href)").getall()
    list_name = selector.css(".list1 li a::attr(title)").getall()
    list_href = selector.css(".list1 li a::attr(href)").getall()

    list_info = zip(list_name,list_href)
    #find_list = re.findall('<a title="(.*?)"  hidefocus="true" href="(.*?)"',response.text)
    #print(find_list)
    return list_info
# https://www.kugou.com/yy/rank/home/1-6666.html?from=rank
#url = 'https://www.kugou.com/yy/html/rank.html'
url = 'https://www.kugou.com/yy/special/single/4184876.html'
def get_music_id(html_url):
    response = requests.get(url=html_url,headers=headers)
    hash_list = re.findall('"hash":"(.*?)"',response.text)
    album_id_list = re.findall('"album_id":(.*?)"',response.text)
    #print(response.text)
    print("hash_list",hash_list)
    print("album_id_list",album_id_list)
    music_id_list = zip(hash_list,album_id_list)
    return music_id_list

def get_music_info(hash,music_id):
    musicid = music_id.replace(",","")
    print("musicid",musicid)
    # url = f'https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery191040496427077930464_1654659029693&hash=2485A266FAEF3DCE927101F013C16CA4&dfid=2UIFnB0WnAKw4N2AuF2k0mxp&appid=1014&mid=6fcace8a7905113868bcd0dbf533b345&platid=4&album_id=57509324&album_audio_id=411248524&_=1654659029694'
    url = f'https://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash={hash}&dfid=2UIFnB0WnAKw4N2AuF2k0mxp&appid=1014&mid=6fcace8a7905113868bcd0dbf533b345&platid=4&album_id={musicid}&_=1654659029694'
    print(url)
    response = requests.get(url=url,headers=headers)
    title = response.json()['data']['audio_name']
    play_url = response.json()['data']['play_backup_url']
    print("title",title)
    print("play_url",play_url)
    if not play_url :
        play_url = response.json()['data']['play_backup_url']
    music_info = [title,play_url]
    return music_info

def save(title,play_url):
    print("play_url",play_url)
    urllib.request.urlretrieve(play_url, f"{filename}{title}.mp3")
    music_content = requests.get(url=play_url,headers=headers)
    # with open(filename + title + '.mp3',mode='wb') as f:
    #     f.write(music_content.content)
    #     print(title,"保存成功")


def main(html_url):
    list_url = get_response(html_url)
    for list_name,link in  list_url:
        print(f'````````````````````````正在爬取{list_name}``````````````````````````````````````````````')
        music_id_list = get_music_id(link)
        for hash,music_id in music_id_list:
        #    print(hash,"hash")
        #    print(music_id,"music_id")
           music_info = get_music_info(hash,music_id)
           print("music_info",music_info[0])
           print("musice_id",music_id[1])
           save(music_info[0],music_info[1])




#res = get_music_id("https://www.kugou.com/yy/html/rank.html")

if __name__ == "__main__":
    main(url)
