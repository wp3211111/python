from threading import Thread
from multiprocessing import Process
import datetime
from workerThread import WorkerThread
# def func():
#     for i in  range(1000):
#         print("func",i)

def callback(result):
    time2 = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    print(time2)
    print(result)

def main():
    worker = WorkerThread(callback)
    time1 = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S:%f')
    print(time1)
    worker.start()
    worker.join()
    time2 = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S:%f')
    print(time2)
    # print(time1)
    # t = Thread(target=func)
    # t.start()

    # m = Process(target=func)
    # m.start()
    # for i in range(1000):
    #     print("main",i)



if __name__ == "__main__":

    main()


