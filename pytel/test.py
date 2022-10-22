
import tesserocr
from PIL import Image
import pymongo
import redis


a  = 100.00
b  = r"pytho\n123"
c  = 100
d  = {a: "1",b: "2"}
e = [1,2,3,4,5]
f = False
g = ['6','7','8','9','10',False,True]
h = (1,2,3,4,5)
j = (6,7,8,9,10)
k = set('abracadabra')
l= set('alacazam')
q = {'name': 'runoob', 'code': 1, 'site': 'www.runoob.com'}
names = ['Bob','Tom','alice','Jerry','Wendy','Smith']
new_names = [name.upper()for name in names if len(name)>3]
multiples = [i for i in range(100) if i % 7 == 0 and i !=0]
listdemo = ['Google','Runoob', 'Taobao']
newdict = {key:len(key) for key in listdemo}
setnew = {i**2 for i in (1,2,3)}
list1 = ['python', 'test1', 'test2']
list2 = [word.title() if word.startswith('p') else word.upper() for word in list1]
# 这是一个注释
'''
这里是多行注释
这里是多行注释
这里是多行注释
'''
a1=100000
b1=100000
#image = Image.open()
#print(tesserocr.file_to_text('2.png'))
image = Image.open('2.png')
print(pymongo.version)
print(redis.VERSION)
