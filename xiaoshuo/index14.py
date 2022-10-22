from concurrent.futures import ThreadPoolExecutor
#from concurrent.futures import ProcessPoolExecutor


def fn(name):
    for i in range(10000):
        print(i)


if __name__ == "__main__":
    # fn('12332')
    with ThreadPoolExecutor(50) as t:
        for i in range(100):
            t.submit(fn,'name'==f"县城{i}")

    print("123123")  #线程守护 等待所有线程执行完毕后执行
