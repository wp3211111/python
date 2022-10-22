from wsgiref import headers
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_csv('data.csv',header=None,index_col=0)
#先行 后  列排序
red_ball = df.loc[:,1:6]
blue_ball = df.loc[:,7]
print(red_ball)
print(blue_ball)
# 把红球所有数据拿出并且一维数组
red_ball_count = pd.value_counts(red_ball.values.flatten())

# 如果只又一列 可以直接处理
blue_ball_count =  pd.value_counts(blue_ball)

print(blue_ball_count)

# fig,ax = plt.subplots(2,1)
# 红球饼图
# ax[0].pie(red_ball_count,labels = red_ball_count.index,radius = 1,wedgeprops = {"width":0.3})
# 篮球饼图
# ax[0].pie(blue_ball_count,labels = blue_ball_count.index,radius = 0.5,wedgeprops = {"width":0.2})

plt.pie(red_ball_count,labels = red_ball_count.index,radius = 1,wedgeprops = {"width":0.3})
plt.pie(blue_ball_count,labels = blue_ball_count.index,radius = 0.5,wedgeprops = {"width":0.2})
plt.show()
