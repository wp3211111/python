import pandas as pd
import json
def json_dic(i, key1, my_dic):
    for key in i:
        if type(i[key]) == dict:
            key1 = key
            json_dic(i[key], key1, my_dic)
        if type(i[key]) == list:
            for m in i[key]:
                json_dic(m, key1, my_dic)
        else:
            print(key1 + '_' + key, i[key])
            my_dic[key1 + '_' + key] = i[key]
    return my_dic
key1 = ''
my_list = []

with open('123.json', 'r',encoding='utf-8') as fs:
    fs_data = json.load(fs)
    for i in fs_data:
        my_dic = json_dic(i, key1, {})
        my_list.append(my_dic)
df = pd.DataFrame(my_list, columns=my_dic.keys())
df.to_excel("123.xlsx")
