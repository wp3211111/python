# mongdb
import json

import pymongo

# url = "mongodb://localhost:27017"
url = "mongodb://localhost:27017"

# 设置mongoDB 结果 解码


# 批量插入
from bson import json_util, ObjectId


def insert_many(myclient, datas, i):
    # 判断空
    if datas == []:
        return
    c = myclient["user"][i]
    l = []
    for i in datas:
        print(i)
        l.append(i)

    c.insert_many(l)


def find_all(myclient, i,page, limit):
    c = myclient["user"][i]


    data = c.find().skip((page - 1) * limit).limit(limit)
    x2 = []
    for i in data:
        i = json.loads(json_util.dumps(i))
        x2.append(i)
    count = data.count()
    #返回总数 分页数据 当前页 每页条数
    return count, x2, page, limit




# 查询全部 时间排序 由近到远
def find_all_sort2(myclient, i):
    c = myclient["user"][i]
    m = c.find().sort("msg_time", pymongo.DESCENDING)
    x2 = []

    for i in m:
        i = json.loads(json_util.dumps(i))
        x2.append(i)
    return x2


# 时间排序
def find_all_sort(myclient, limit):
    c = myclient["user"]["messages"]

    m = c.find().sort("msg_time", pymongo.ASCENDING).limit(limit)
    x2 = []

    for i in m:
        x2.append(i)
    return x2


# 根据id delete
def delete_by_id(myclient, _id, i):
    c = myclient["user"][i]
    #根据id删除
    c.delete_one({"_id": ObjectId(_id)})





# 删除多个id
def delete_many_by_id(myclient, ids):
    c = myclient["user"]["messages"]
    c.delete_many({"_id": {"$in": ids}})


# 分页数据 时间排序 由近到远
def find_all_page(myclient, page, limit, i):
    c = myclient["user"][i]
    m = c.find().sort("msg_time", pymongo.DESCENDING).skip(page * limit).limit(limit)
    x2 = []

    for i in m:
        i = json.loads(json_util.dumps(i))
        x2.append(i)
    return x2

#
# r = find_all_page(mgoclient,1,100 ,'BetU_DSJC')
#
#
#
# print(len(r))


