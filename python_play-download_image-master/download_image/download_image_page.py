import argparse
from DownloadImage import DownloadImage
def getArgv():
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--uri', dest='Url', type=str, default='root', help='target Url')
    parser.add_argument('-n', '--num', dest='Num', type=str, default='20', help='target runCount')
    args= parser.parse_args()
    return args.Url


if __name__ == '__main__':
    url = getArgv()
    obj=DownloadImage(url,None)
    obj.run()