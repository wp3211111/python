
from base64 import decode
from errno import ESTALE
from subprocess import CREATE_NEW_CONSOLE
import urllib.request
import re
import os
import requests
import ssl


def main():
    context = ssl._create_unverified_context()
    url = "https://www.lightfinance.co.uk/home"
    headers = {
        "user-agent" : "Chrome	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    }
    response = requests.get(url,headers=headers,verify=False)
    data =  response.text
    # print("data",data)
    str_data = data
    # print("str_data",str_data)
    with open("index.html","w",encoding="utf-8") as f:
        f.write(str_data)

        # css，js，img正则表达式，以获取文件相对路径
    #patterncss = '<link rel="stylesheet" type="text/css" href="(.*?)"'
    #cssRe =
    # csspatter = '/href=[\s]{0,1}\"(.+?)\"/gm'
    linkpatter = "]*?href=\"([^>]*?)\"[^>]*?>"
    #linkpatter = '<link(?:(?:\s|.)+?)href=[\"\'](.+?)[\"\'](?!\<)(?:(?:\s|.)*?)(?:(?:\/\>)|(?:\>\s*?\<\/link\>))'
    patternjs = '<script src="(.*?)"'
    #jspatter = "<script [^<]*(?:(?!<\/script>)<[^<]*)*<\/script>"
    jspatter =  '<script(?:(?:\s|.)+?)src=[\"\'](.+?)[\"\'](?!\<)(?:(?:\s|.)*?)(?:(?:\/\>)|(?:\>\s*?\<\/script\>))'
    patternimg = '<img src="(.*?)"'
    #imgpatter = '<img(?:(?:\s|.)+?)src=[\"\'](.+?)[\"\'](?!\<)(?:(?:\s|.)*?)(?:(?:\/\>)|(?:\>\s*?\))'
    # 使用re模块通过正则规则获取相对路径
    cssHerf = re.compile(linkpatter , re.S).findall(str_data)
    jsHref = re.compile(patternjs, re.S).findall(str_data)
    imgHref = re.compile(patternimg, re.S).findall(str_data)


    patternCssTitle = '(/?.*?.css?)'
    # cssfilename = re.compile(patternCssTitle, re.S).findall(cssHerf.__str__())[1].replace("/","")

    # cssfilename = re.compile(patternCssTitle, re.S).findall(cssHerf)
    print("cssHerf",cssHerf)
    print("jsHref",jsHref)
    print("imgHref",imgHref)
    # print("cssName",cssfilename)
    for  adress in cssHerf:
        if ".css" in adress :
            print("adress1",adress)
            if "https" or "http" in adress:
                print(adress)
                continue
            css_souce  = urllib.request.urlopen(url+adress,context=context).read().decode("utf-8");

            if "?" in adress:
                adress =  adress.split("?")[0]
            else:
                pass
            # adress = adress.replace("([^\?]+)$","")
            if adress == '': continue

            if not os.path.exists(f'resources'):
                os.mkdir(f'resources')
                with open(adress,"w",encoding="utf-8") as f:
                        f.write(css_souce)
            else :
                with open(adress,"w",encoding="utf-8") as f:
                        f.write(css_souce)

    for  adress in jsHref:
        print("jsad",adress)
        if "https" in adress:
            print(adress)
            continue
        js_souce  = urllib.request.urlopen(url+adress,context=context).read().decode("utf-8");
        print("js_souce",js_souce)
        if "?" in adress:
           adress =  adress.split("?")[0]
        else:
            pass
        # adress = adress.replace("([^\?]+)$","")
        with open(adress,"w",encoding="utf-8") as f:
            f.write(js_souce)
    for  adress in imgHref:
        meme_img = requests.get(url+adress)
        # 表情包内容 bytes 格式
        meme = meme_img.content

        adress.replace("images/","")
        if "?" in adress:
           adress =  adress.split("?")[0]
        else:
            pass
        # adress = adress.replace("([^\?]+)$","")
        print("images_souce",adress)
        with open(adress,"wb") as f:
            f.write(meme)
        # if not os.path.exists(f'./uploads'):
        #     os.mkdir(f'./uploads')
        #     if not os.path.exists(f'uploads/image'):
        #         os.mkdir(f'uploads/image')
        #         print(adress)
        #         with open(adress,"wb") as f:
        #             f.write(meme)


if __name__ == '__main__':
    main()


