import json

import redis

# client = redis.Redis(host='localhost', port=6379, db=0)


# hash create
def add_hash(client, key, field, value):
    # 序列化value
    value = json.dumps(value)
    client.hset(key, field, value)



# find hash
def find_hash(client, key, field):
    value = client.hget(key, field)

    # 判断是否是None
    if value is None:
        print("Hash not found")
        return {}
    value = json.loads(value)
    return value




# x = {
#     "238233": {
#         "user_id": 238233,
#         "name": "昵称238233",
#         "login_time": "2019-01-01 11:11:11",
#         "msg_time": "2019-01-01 13:11:11",
#         "login_ip": "192.168.2.32",
#         "user_agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
#
#     }
#
# }
#
# create_hash("user_info", "user_info", x)
# v = find_hash("user_info", "user_info")
# print(v)
# print("\n")
#
# v["238233"]["msg_time"] = "2019-03-01 13:11:11"
# create_hash("user_info", "user_info", v)
# v2 = find_hash("user_info", "user_info")
# print(v2)
