from turtle import width
import requests
import pprint 
import re
import os
from tqdm import tqdm




filename = "video_sanguo\\"

if not os.path.exists(filename):
    os.mkdir(filename)

headers = {
'referer': 'https://v.qq.com/',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
}

data = {
  "buid": "vinfoad",
  "adparam": "pf=in&ad_type=LD%7CKB%7CPVL&pf_ex=pc&url=https%3A%2F%2Fv.qq.com%2Fx%2Fcover%2Fceusrubximxm0g8%2Fg0023yhas9e.html&refer=https%3A%2F%2Fm.v.qq.com%2F&ty=web&plugin=1.0.0&v=3.5.57&coverid=ceusrubximxm0g8&vid=g0023yhas9e&pt=&flowid=097d69636277f74dd2cccb3d539abe09_10201&vptag=m_v_qq_com&pu=0&chid=0&adaptor=2&dtype=1&live=0&resp_type=json&guid=fa2b676dfe9a76379917e7388c04da09&req_type=1&from=0&appversion=1.0.174&platform=10201&tpid=2",
  "vinfoparam": "spsrt=1&charge=0&defaultfmt=auto&otype=ojson&guid=fa2b676dfe9a76379917e7388c04da09&flowid=097d69636277f74dd2cccb3d539abe09_10201&platform=10201&sdtfrom=v1010&defnpayver=1&appVer=3.5.57&host=v.qq.com&ehost=https%3A%2F%2Fv.qq.com%2Fx%2Fcover%2Fceusrubximxm0g8%2Fg0023yhas9e.html&refer=v.qq.com&sphttps=1&tm=1654679002&spwm=4&logintoken=%7B%22main_login%22%3A%22%22%2C%22openid%22%3A%22%22%2C%22appid%22%3A%22%22%2C%22access_token%22%3A%22%22%2C%22vuserid%22%3A%22%22%2C%22vusession%22%3A%22%22%7D&vid=g0023yhas9e&defn=&fhdswitch=0&show1080p=1&isHLS=1&dtype=3&sphls=2&spgzip=1&dlver=2&drm=32&hdcp=0&spau=1&spaudio=15&defsrc=1&encryptVer=9.1&cKey=oAzvuVJTo6N7xpEItZs_lpJX5WB4a2CdS8kH47qBVaqtHEZQ1c_W6myJ8hQKnmDDHol2GtbCPzvM2vPBr-xE-uhvZyEMY131vUh1H4pgCXe2OpEa7nTpO6BlwhV_8-lh8HwjEERWEpPRluNDEH6IC8EOljLQ2VfW2sTdospNPlD9535CNT9iSo3cLRH93ogtX_OJeYNVWrDYS8b5t1pjAAuGkp0GMnhe6YhCKguWWwpjM-wkhZFSj1txt8n3fPTN7CO_G6uqVHyu1Hw5lywy2R1qlkRdgU8FStmtUlLeE6pp1o5vK9-fmBWuHW0vOn7GRfiy6f51tcyOm5hk1SRnlVGiZ2jGAwMDYAeIUg&fp2p=1&spadseg=3"
}

url = 'https://vd.l.qq.com/proxyhttp'

response = requests.post(url=url,json=data,headers=headers)

html_data = response.json()['vinfo']
print("```````````````",html_data)
m3u8_url = re.findall('url(.*?),',html_data)[3].split('"')[2]

m3u8_data = requests.get(url=m3u8_url,headers=headers).text
# with open ('test.m3u8', mode='wb') as fs :
#      fs.write(m3u8_data.content)

# m3u8_data=open('test.m3u8').read()
print("```````````````",m3u8_data)
m3u8_data = re.sub('#EXTM3U','',m3u8_data)
m3u8_data = re.sub('#EXT-X-VERSION:\d+','',m3u8_data)
m3u8_data = re.sub('## Generated in 2021-08-19 18:05:55 by Tencent','',m3u8_data)
m3u8_data = re.sub('#EXT-X-TARGETDURATION:\w+','',m3u8_data)
m3u8_data = re.sub('#EXT-X-PLAYLIST-TYPE:\w+','',m3u8_data)
m3u8_data = re.sub('#EXTINF:\d+\.\d+','',m3u8_data)
m3u8_data = re.sub('#EXT-X-MEDIA-SEQUENCE:\d','',m3u8_data)
m3u8_data = re.sub('#EXT-X-MAP:URI="(.*)"','',m3u8_data)
m3u8_data = re.sub('#EXT-X-ENDLIST','',m3u8_data).replace(",","")
#print(m3u8_data)
m3u8_list = m3u8_data.split()
#print("222222222222",m3u8_list)
m3u8_list.remove(m3u8_list[0])
#EXT-X-MEDIA-SEQUENCE:0
for link_url  in  tqdm(m3u8_list):
    #print("```````````````````",link_url)
    ts_url = 'https://apd-c7fb1d842a37c7c6760ad49fa2c52901.v.smtcdns.com/vhqts.tc.qq.com/AmIqydWMx3INCuQaDWfIKZ5knonOI2enpTtVPW_vFFDc/oolDAjO9LWlWQl_JvmP6DCZiQ8EuWBV8XUrTTGajJfljCKivSEvK0XM8jUZAhTeUFDmXWAdpDmfp2YLWCtGi5iK7GItru7rhyZ2WjeZSRpkrSBhP5IPJJ3AAetHEMoK4lrdc5BlugcCKzv3PaSmFRbXNEGt5OcZwDOenIF2Z8KyjZ6jFLyMB6Q/' + link_url + "&cost=low"
    print("```````````222222222222222222222222````````",ts_url)
    ts_content = requests.get(url=ts_url,headers=headers).content
    #print("ts_content",ts_content)
    with open(filename + '新三国.mp4',mode='ab') as f:
        f.write(ts_content)


#print(m3u8_list)

