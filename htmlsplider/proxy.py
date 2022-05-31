from cmath import e
import  urllib.request

def main():
    url = "http://icanhazip.com/"
    
    proxy = {
        "http" : "http://183.247.211.50:30001",
    }
    proxy_handler = urllib.request.ProxyHandler(proxy)
    print('````````````data')
    openner = urllib.request.build_opener(proxy_handler)
    try:
        response = openner.open(url)
        #print(response.headers)
        data = openner.open(url).read()

        print(data)
    except Exception as e:
        print(e)
    
    #handler  = urllib.request.HTTPSHandler()

    #openner = urllib.request.build_opener(handler)


if __name__ == '__main__':
    main()
