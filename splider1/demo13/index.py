

list1 =  [1,2,7,13,55,77,133,233,666,888,1024,2048,3544,4555,7777]

n = int(input('请输入你要查找的数:'))
left = 0

right1 = len(list1) -1

while left <= right1 :
    mid = (left + right1) // 2
    print(left)
    print(right1)
    if  n > list1[mid] :
        left = mid + 1
    elif n < list1[mid] :
        right1 = mid -1
    else :
        print('我找到了这个数,他在%s位置'% mid)
        break
else :
    print('没有这个数据')

