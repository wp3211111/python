from threading import Thread
from multiprocessing import Process


def func():
    for i in  range(1000):
        print("func",i)


def main():
    # t = Thread(target=func)
    # t.start()
    m = Process(target=func)
    m.start()
    for i in range(1000):
        print("main",i)
    


if __name__ == "__main__":

    main()
   
    
