import xlwt
import json
import pandas as pd


# 创建一个excel
wb = xlwt.Workbook()
# 选择工作簿
sh = wb.add_sheet('data')
list1 = []
def print_keyvalue_all(input_json):
        if isinstance(input_json,dict):
            for key in input_json.keys():
                key_value = input_json.get(key)
                if isinstance(key_value,dict):
                    print_keyvalue_all(key_value)
                elif isinstance(key_value,list):
                    for json_array in key_value:
                        print_keyvalue_all(json_array)
                else:
                    list1.append(str(key)+ " = " +str(key_value))
        elif isinstance(input_json,list):
            for input_json_array in input_json:
                print_keyvalue_all(input_json_array)
# list2 = ["a", "b", "c", "d", "e"]
# for index, value in enumerate(list2):
#     print(index, value)
with open('123.json', 'r',encoding='utf-8') as fs:
    fs_data = json.load(fs)
    print_keyvalue_all(fs_data)
    for  index,item  in  enumerate(list1) :
        print(index)
        sh.write(index,0,item)


    #print(type(fs_data))
#写入数据 到 单元格 第一个数字是行,第二个是列,都从0开始计算
# sh.write(0,0,"复仇者联盟")
# sh.write(2,6,"1800W")
# 保存工作簿
wb.save('json2.xls')


