<h1 align="center">
  Tron Bot
</h1>

## Requirements

* Python 3
* pip3 install base58
* pip3 install requests
* pip3 install tronapi
* pip3 install python-telegram-bot
* pip3 install lxml

## How to use

### Settings
Bot Settings are in the file tronapi_bot/constants.py:

```python
BOT_NAME = ""
BOT_TOKEN = ""
```
### Run on local machine
```bash
> python tron_bot.py
```

### Run on server
Installing and running the bot on the server

#### Step 1
Upload all project files to server
Example: /home/iexbase/tron_bot
#### Step 2
Create a Systemd file for TronBot:
```
sudo nano /etc/systemd/system/tronbot.service
```
#### Step 3
```
[Unit]
Description=TronBot service
After=network.target

[Service]
Type=idle
WorkingDirectory=/home/iexbase/tron_bot
User=root
Group=root
ExecStart=/usr/bin/python3.6 tron_bot.py

[Install]
WantedBy=multi-user.target
```
#### Step 4
```
sudo systemctl start tronbot
sudo systemctl enable tronbot
```
check run status
```
sudo systemctl status tronbot
```

## Support and Donation
* Star and/or fork this repository
* TRX: TRWBqiqoFZysoAeyR1J35ibuyc8EvhUAoY
