apt update
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common


$ curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/debian/gpg | sudo apt-key add -


$ sudo add-apt-repository \
   "deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/debian \
  $(lsb_release -cs) \
  stable"


apt install pyhon3
apt install python3-pip
apt install nodejs
apt install npm
npm install -g pm2


pip3 install -r requirements.txt
docker run -itd --name r -p 127.0.0.1:6379:6379 redis
docker run -itd --name mongo -p 127.0.0.1:27017:27017 mongo


pm2 start main.py -n web --interpreter python3
pm2 start app.py -n api --interpreter python3