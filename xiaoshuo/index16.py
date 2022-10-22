# 协程
# input()
# requests.get()
# 一般情况下,当程序处于IO操作的时候,线程都会处于阻塞状态

# 协程  当程序处于IO操作的时候,可以选择性的切换到其他任务上

# 多任务异步操作
import asyncio

import time

def func():
    print("11111111111")
    time.sleep(3) #让当前线程处于阻塞状态,cpu是不为我工作的
    print("2222222222222222")


async  def  func1():
    print("你好啊,我是cluo")
async  def  func2():
    # time.sleep(3)
    await asyncio.sleep(3)
    print("你好啊,我是cluo1")

async  def  func3():
    # time.sleep(4)
    await asyncio.sleep(4)
    print("你好啊,我是cluo2")

async  def  func4():
    await asyncio.sleep(5)
    print("你好啊,我是cluo3")

async  def  func5():
    await asyncio.sleep(6)
    print("你好啊,我是cluo4")

async  def  func6():
    await asyncio.sleep(7)
    print("你好啊,我是cluo5")

if __name__ == "__main__" :
    fn1 = func1()
    fn2 = func2()
    fn3 = func3()
    fn4 = func4()
    fn5 = func5()
    fn6 = func6()
    asyncio.create_task(fn1)
    # tasks = [ asyncio.create_task(fn1) ,asyncio.create_task(fn2),asyncio.create_task(fn3)asyncio.create_task(fn4)]

    tasks = [fn1,fn2,fn3,fn4,fn5,fn6]
    time1 = time.time()
    asyncio.run(asyncio.wait(tasks))
    time2 = time.time()
    print(time2-time1)
    #asyncio.run(fn)
