from base64 import decode
from errno import ESTALE
import urllib.request
import re
import os
import requests

def main():
    url = "http://www.mcores.vip/"
    response = urllib.request.urlopen(url)
    data =  response.read()
    # print("data",data)
    str_data = data.decode("utf-8")
    # print("str_data",str_data)
    with open("index.html","w",encoding="utf-8") as f:
        f.write(str_data)
    str_name = "mcores"
    bytes_name = str_name.encode("utf-8")
    print(bytes_name)

        # css，js，img正则表达式，以获取文件相对路径
    # patterncss = '<link rel="stylesheet" type="text/css" href="(.*?)"'
    # csspatter = '/href=[\s]{0,1}\"(.+?)\"/gm'
    linkpatter = "]*?href=\"([^>]*?)\"[^>]*?>"
    #linkpatter = '<link(?:(?:\s|.)+?)href=[\"\'](.+?)[\"\'](?!\<)(?:(?:\s|.)*?)(?:(?:\/\>)|(?:\>\s*?\<\/link\>))'
    patternjs = '<script src="(.*?)"'
    #jspatter = "<script [^<]*(?:(?!<\/script>)<[^<]*)*<\/script>"
    jspatter =  '<script(?:(?:\s|.)+?)src=[\"\'](.+?)[\"\'](?!\<)(?:(?:\s|.)*?)(?:(?:\/\>)|(?:\>\s*?\<\/script\>))'
    patternimg = '<img src="(.*?)"'
    #imgpatter = '<img(?:(?:\s|.)+?)src=[\"\'](.+?)[\"\'](?!\<)(?:(?:\s|.)*?)(?:(?:\/\>)|(?:\>\s*?\))'
    # 使用re模块通过正则规则获取相对路径
    cssHerf = re.compile(linkpatter, re.S).findall(str_data)
    jsHref = re.compile(patternjs, re.S).findall(str_data)
    imgHref = re.compile(patternimg, re.S).findall(str_data)
    print("cssHerf",cssHerf)
    patternCssTitle = '(/?.*?.css?)'
    # cssfilename = re.compile(patternCssTitle, re.S).findall(cssHerf.__str__())[1].replace("/","")

    # cssfilename = re.compile(patternCssTitle, re.S).findall(cssHerf)
    print("cssHerf",cssHerf)
    print("jsHref",jsHref)
    print("imgHref",imgHref)
    # print("cssName",cssfilename)
    for  adress in cssHerf:
        print(url+adress)
        if adress.find("css") == -1:
             print("sdfsdfd",adress)
             continue
        css_souce  = urllib.request.urlopen(url+adress).read().decode("utf-8");
        # print("css_souce",css_souce)
        
        if "?" in adress:
           adress =  adress.split("?")[0]
        else:
            pass
        # adress = adress.replace("([^\?]+)$","")
        if adress == '': continue
        if adress.find("css") == -1:
             print("sdfsdfd",adress)
             continue
        #print( adress[ adress.rindex( '/' ) + 1 : len( adress ) ] ); 
        print("adress22222222222222",adress)
        if adress.find("css") == -1:
            adress.split("/")
            
        if not os.path.exists(f'./css'):

            os.mkdir(f'./css')

        with open(adress,"w",encoding="utf-8") as f:
            f.write(css_souce)
    # for  adress in jsHref:
    #     js_souce  = urllib.request.urlopen(url+adress).read().decode("utf-8");
    #     # print("css_souce",css_souce)
    #     adress.replace("js/","") 
    #     if "?" in adress:
    #        adress =  adress.split("?")[0]
    #     else:
    #         pass
    #     # adress = adress.replace("([^\?]+)$","")
    #     print("js_souce",adress)
    #     if not os.path.exists(f'./js'):
    #         os.mkdir(f'./js')
    #     with open(adress,"w",encoding="utf-8") as f:
    #         f.write(js_souce)
    # for  adress in imgHref:
    #     meme_img = requests.get(url+adress,verify=false)
    #     # 表情包内容 bytes 格式
    #     meme = meme_img.content
    #     if "?" in adress:
    #        adress =  adress.split("?")[0]
    #     else:
    #         pass
    #     # adress = adress.replace("([^\?]+)$","")
    #     print("images_souce",adress)
    #     if not os.path.exists(f'./image'):
    #         os.mkdir(f'./image')
    #     with open(adress,"wb") as f:
    #         f.write(meme)
    



if __name__ == '__main__':
    main()
