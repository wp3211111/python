
import threading
import time
from multiprocessing import Process

class WorkerThread(threading.Thread):

    def __init__(self, callback):
        super(WorkerThread, self).__init__()
        self.callback = callback


    def run(self):
        for i in  range(1000):
            print("func",i)
