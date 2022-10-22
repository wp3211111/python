import urllib.request


def main():
    user = "admin"
    pwd = "123456"
    local_url = "http:192.168.11.13:8880"

    pwd_manger = urllib.request.HTTPPasswordMgrWithDefaultRealm

    pwd_manger.add_password(None,local_url,user,pwd)

    auth_handler = urllib.request.HTTPBasicAuthHandler(pwd_manger)

    openner  = urllib.request.build_opener(auth_handler)

    response = openner.open(local_url)





if __name__ == "main":
    main()