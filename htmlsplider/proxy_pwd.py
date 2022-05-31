from urllib import response
import urllib.request

def main():
    user_name = "admin"
    pwd = "123456"
    proxy_url = "123.154.44.130:8080"

    password_manager = urllib.request,urllib.request.HTTPPasswordMgrWithDefaultRealm
    
    password_manager.add_password(None,proxy_url,user_name,pwd)

    handle_auth_proxy = urllib.request.ProxyBasicAuthHandler(password_manager)

    openner_auth = urllib.request.build_opener(handle_auth_proxy)

    response = openner_auth.open("http://www.baidu.com")

    print(response.read())

    

if __name__ == '__main__':
    main()
