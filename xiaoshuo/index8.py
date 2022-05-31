
import requests

header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
     "Referer": "https://www.pearvideo.com/video_1761790"

}

count = "1761790"
url = "https://www.pearvideo.com/video_"+count

post_url = "https://www.pearvideo.com/videoStatus.jsp?contId="+count+"&mrd=0.46349445272049894"
resp = requests.get(post_url,headers=header,verify=False)

dic = resp.json()


vedio_time = dic['systemTime']
vedio_src = dic['videoInfo']['videos']['srcUrl']
vedio_src = str(vedio_src).replace(vedio_time,f"cont-{count}")

with open("a.mp4",mode="wb") as f:
    f.write(requests.get(vedio_src,headers=header,verify=False).content)
    f.close()
    print("over")



