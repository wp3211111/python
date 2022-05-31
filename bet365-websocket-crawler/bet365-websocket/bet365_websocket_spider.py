# coding:utf-8
occurred_eventids = []
checklist = {}
s_valit = False
SCORE_DIT = {}
def pro_start(arg):
    import re
    import sys
    import random
    import time
    import requests
    import json
    from autobahn.twisted.websocket import connectWS, WebSocketClientFactory, WebSocketClientProtocol
    from autobahn.websocket.compress import (
        PerMessageDeflateOffer,
        PerMessageDeflateResponse,
        PerMessageDeflateResponseAccept,
    )
    from autobahn.twisted.util import sleep


    from twisted.web.client import Agent, HTTPConnectionPool
    from twisted.python import log
    from twisted.internet.defer import inlineCallbacks, returnValue,succeed
    from twisted.internet import reactor, ssl
    from twisted.internet.protocol import ReconnectingClientFactory

    from txaio import start_logging, use_twisted
    from bet365token import get_token, _nst_decrypt
    # use_twisted()
    from functools import partial

    from twisted.web.iweb import IBodyProducer

    from zope.interface.declarations import implementer

    @implementer(IBodyProducer)
    class BytesProducer(object):
        def __init__(self, body):
            self.body = body
            self.length = len(body)

        def startProducing(self, consumer):
            consumer.write(self.body)
            return succeed(None)

        def pauseProducing(self):
            pass

        def stopProducing(self):
            pass

    proxies = {
        'http': 'http://127.0.0.1:8888',
        'https': 'http://127.0.0.1:8888'
    }
    requests.get = partial(requests.get, proxies=proxies)
    requests.post = partial(requests.post, proxies=proxies)
    log.startLogging(sys.stdout)

    language = 'cn'  # en or cn
    sport_type = 'football'  # football or basketball

    ODATA = {}
    EV = {}

    Auto_token = []

    '''"eventId":{
                "eventId": 88213366,
                "homeTeam": "",
                "awayTeam": "",
                "vsTeams": "",
                "score": "",
                "league": "",
                "restTime": ""
            }'''

    agent = Agent(reactor, pool=HTTPConnectionPool(reactor))
    from twisted.web.http_headers import Headers

    @inlineCallbacks
    def upload():
        try:
            yield agent.request(b'POST', b'http://127.0.0.1:9906/updateEvent/',
                                Headers({'Content-Type': ['application/json'],
                                         "Connection": ["keep-alive"]}),
                                bodyProducer=BytesProducer(json.dumps(SCORE_DIT).encode()))

        except:
            print("上传错误")
            yield

    def toJson(string):
        try:
            dic = {}
            data = string[:-1].split(';')
            for item in data:
                arr = item.split('=')
                dic[arr[0]] = arr[1]
        except Exception as e:
            # print(e)
            pass
        return dic

    def parseStart(self, txt):
        global SCORE_DIT
        print("开始：{}".format(txt))
        is_start = False
        inPlayDatas = txt.split('|CL;')
        footballDatas = ""
        basketballDatas = ""
        is_cleared = False
        if len(inPlayDatas) >= 2:
            # soccerDatas = inPlayDatas[1]
            for inPlayData in inPlayDatas:
                if 'ID=1;' in inPlayData and 'CD=1;' in inPlayData:
                    footballDatas = inPlayData
                elif 'ID=18;' in inPlayData:
                    basketballDatas = inPlayData
        else:
            return  # End generator
        if sport_type == 'football':
            sportDatas = footballDatas
        elif sport_type == 'basketball':
            sportDatas = basketballDatas
        else:
            sportDatas = ''

        competitions = sportDatas.split('|CT;')
        if len(competitions) > 0:
            competitions = competitions[1:]
        else:
            competitions = []
        for comp in competitions:
            data = comp.split('|EV;')
            league = toJson(data[0]).get('NA')
            for item in data[1:]:
                MA = toJson(item.split('|MA;')[0])
                if "C1A_10_0" in MA['ID'] and " v " in MA["NA"]:
                    eventid = MA['ID'][:8]
                    score = MA['SS']
                    vsTeams = MA["NA"]
                    # print(item.split('|MA;')[0])
                    PA0 = item.split('|PA;')[0]
                    PA0Json = toJson(PA0)
                    TU = PA0Json['TU']
                    TT = int(PA0Json['TT'])
                    TS = int(PA0Json['TS'])
                    TM = int(PA0Json['TM'])

                    # The match has not started. TT=0 means the match has not started or paused, TM=45 means in the midfield.
                    if TM == 0 and TT == 0:
                        retimeset = '00:00'
                    else:
                        if TT == 1:
                            begints = time.mktime(time.strptime(TU, '%Y%m%d%H%M%S'))
                            nowts = time.time() - 8 * 60 * 60
                            retimeset = str(int((nowts - begints) / 60.0) + TM) + \
                                        ':' + str(int((nowts - begints) % 60.0)).zfill(2)
                        else:
                            retimeset = '45:00'
                    hometeam, awayteam = vsTeams.split(" v ")
                    if score != "":
                        print(league, hometeam, awayteam, score, retimeset, eventid)
                        if not is_cleared:
                            is_cleared = True
                            SCORE_DIT = {}

                        SCORE_DIT[eventid] = {
                            "eventId": eventid,
                            "homeTeam": hometeam,
                            "awayTeam": awayteam,
                            "vsTeams": vsTeams,
                            "score": score,
                            "league": league,
                            "restTime": retimeset
                        }
                        is_start = True

        # if is_start:
        #     netime = random.randint(10, 30)
        #     print("下次：{}秒后".format(netime))
        #     reactor.callLater(netime, self.sendMessage, u'\x16\x00CONFIG_10_0,OVInPlay_10_0,Media_L10_Z0,XL_L10_Z0_C1_W3\x01'.encode('utf-8'))


    def parse_new_game(txt):
        print("新赛事")
        print(txt)
        lst = txt.split("\x15")
        for _ in lst:
            ev_lst = _.split("|EV;")
            if len(ev_lst) > 1:
                dit = toJson(ev_lst[1])
                if dit.get('ID') is not None:
                    if "C1A_10_0" in dit.get('ID'):
                        eventid = dit['ID'][:8]
                        if dit.get("SS") is not None and dit.get("NA") is not None and dit.get("CT") is not None and " v " in dit.get("NA", []):
                            score = dit['SS']
                            vsteams = dit["NA"]
                            hometeam, awayteam = vsteams.split(" v ")
                            league = dit.get("CT")
                            restimeset = '00:00'
                            print("新赛事：", league, hometeam, awayteam, score, restimeset, eventid)
                            SCORE_DIT[eventid] = {
                                "eventId": eventid,
                                "homeTeam": hometeam,
                                "awayTeam": awayteam,
                                "vsTeams": vsteams,
                                "score": score,
                                "league": league,
                                "restTime": restimeset
                            }



    def parse_end_game(txt):
        print("全场")
        print(txt)
        lst = txt.split("|\x08")
        for _ in lst:
            if "UC=全场" in _:
                eventid = re.findall("OV(.*?)C1A_10_0", _)
                if len(eventid) > 0:
                    eventid = eventid[0]
                    print("eventid:{}全场msg:{}".format(eventid, _))
                    if SCORE_DIT.get(eventid) is not None:
                        del SCORE_DIT[eventid]

    def parse_score(txt):
        print("进球")
        print(txt)
        lst = txt.split("|\x08")
        for _ in lst:
            if "UC=进球" in _:
                dit = toJson(_)
                eventid = re.findall("OV(.*?)C1A_10_0", _)
                if len(eventid) > 0:
                    eventid = eventid[0]

                    if dit.get("SS") is not None:
                        score = dit['SS']
                        print("eventid:{}进球:{}msg:{}".format(eventid, score, _))
                        if SCORE_DIT.get(eventid) is not None:
                            SCORE_DIT[eventid]["score"] = score

    @inlineCallbacks
    def search(league, hometeam, awayteam, score, retimeset, eventid):
        yield sleep(0.3)
        global occurred_eventids
        global checklist
        occurred_eventids.append(eventid)
        print(occurred_eventids)
        checklist[eventid] = {
            'league': league,
            'hometeam': hometeam,
            'awayteam': awayteam,
            'score': score,
            'retimeset': retimeset
        }
        print(league, hometeam, awayteam, score, retimeset, eventid)
        req = u'\x16\x006V{}C18A_1_1\x01'.format(eventid).encode('utf-8')
        returnValue(req)


    class MyClientProtocol(WebSocketClientProtocol):
        @inlineCallbacks
        def subscribeGames(self, msg):
            for league, hometeam, awayteam, score, retimeset, eventid in dataParse(self, msg):
                try:
                    req = yield search(league, hometeam, awayteam, score, retimeset, eventid)
                except Exception as e:
                    print('error!')
                    print(e)
                    self.sendClose(1000)
                else:
                    pass
                    # self.sendMessage(req)

        def updateGameData(self, msg):
            for m in msg.split('|\x08'):
                d = m.split('\x01U|')
                IT = d[0].replace('\x15', '')
                if len(d) > 1 and IT in ODATA.keys():
                    dic = toJson(d[1])
                    for k in dic.keys():
                        ODATA[IT][k] = dic[k]
                    print('update ', IT, dic)
            print(ODATA)
            print(EV)

        def newGameDataParse(self, msg):
            data = msg.split('|')
            EVC = {}
            MGC = {}
            MAC = {}
            for item in data:
                if item.startswith('EV;'):
                    dic = toJson(item[3:])
                    IT = dic.get('IT')
                    ODATA[IT] = dic
                    EVC = dic
                    EVC["ST"] = []
                    EVC["MG"] = []
                    EV[EVC["FI"]] = EVC
                if item.startswith('ST;'):
                    dic = toJson(item[3:])
                    EVC["ST"].append(dic)
                    IT = dic.get('IT')
                    ODATA[IT] = dic
                if(item.startswith('MG;')):
                    MGC = toJson(item[3:])
                    EVC["MG"].append(MGC)
                    MGC["MA"] = []
                    IT = dic.get('IT')
                    ODATA[IT] = MGC
                if(item.startswith('MA;')):
                    MAC = toJson(item[3:])
                    MGC["MA"].append(MAC)
                    MAC["PA"] = []
                    IT = dic.get('IT')
                    ODATA[IT] = MAC
                if(item.startswith('PA')):
                    dic = toJson(item[3:])
                    MAC["PA"].append(dic)
                    IT = dic.get('IT')
                    ODATA[IT] = dic
            # print(len(EV.keys()))
            # print(len(ODATA.keys()))

        def sendMessage(self, message):
            # print("Send: ", message)
            super().sendMessage(message)

        def onOpen(self):
            print('On Open')
            req = str('\x23\x03P\x01__time,S_{},D_{}\x00'.format(
                self.factory.session_id, self.factory.nst_token)).encode('utf-8')
            # print('sending message:', req)
            self.sendMessage(req)

        @inlineCallbacks
        def onMessage(self, payload, isBinary):
            msg = payload.decode('utf-8')
            if msg.startswith('100'):
                if language == 'en':  # English
                    req = u'\x16\x00CONFIG_1_3,OVInPlay_1_3,Media_L1_Z3,XL_L1_Z3_C1_W3\x01'.encode(
                        'utf-8')
                elif language == 'cn':  # Chinese
                    req = u'\x16\x00CONFIG_10_0,OVInPlay_10_0,Media_L10_Z0,XL_L10_Z0_C1_W3\x01'.encode(
                        'utf-8')
                else:
                    req = ''
                self.sendMessage(req)
                # req2 = u'\x16\x00OVM5\x01'.encode('utf-8')
                # self.sendMessage(req2)

            if re.search("AD=", msg, flags=0):
                if re.search("CONFIG_", msg, flags=0):
                    for _ in msg.split(";"):
                        _lst = _.split("=")
                        if len(_lst) == 2:
                            global is_valit
                            if _lst[0] == "AD" and not is_valit:
                                is_valit = True
                                self.sendMessage(u'\x16\x00{}\x01'.format(_nst_decrypt(_lst[1])).encode('utf-8'))
                                time.sleep(0.1)
                                self.sendMessage(u'\x16\x00OVM21\x01'.format(_lst[1]).encode('utf-8'))


            if len(Auto_token) > 0:
                self.sendMessage(u"\x02\x00command\x01nst\x01{}\x02SPTBK".format(Auto_token[0]).encode('utf-8'))
                del Auto_token[0]

            if language == 'en':  # English
                start_header = 'OVInPlay_1_3'
                new_game_header = "|EV" # "|EV" in  Media_L10_Z0
                score_header = "UC=进球;"
                end_game_header = "UC=全场;"
            elif language == 'cn':  # Chinese
                start_header = 'OVInPlay_10_0'
                new_game_header = "|EV;"
                score_header = "UC=进球;"
                end_game_header = "UC=全场;"
            else:
                start_header = 'OVInPlay_10_0'
                new_game_header = "|EV;"
                score_header = "UC=进球;"
                end_game_header = "UC=全场;"

            if start_header in msg and "|CL;" in msg:
                parseStart(self, msg)
                yield upload()
            else:
                if new_game_header in msg:
                    parse_new_game(msg)
                    yield upload()
                if score_header in msg:
                    parse_score(msg)
                    yield upload()
                if end_game_header in msg:
                    parse_end_game(msg)
                    yield upload()

    class SubClientProtocol(WebSocketClientProtocol):


        def sendMessage(self, message):
            # print("Send: ", message)
            super().sendMessage(message)

        def onOpen(self):
            print('On Open')
            req = str('\x23\x03P\x01__time,S_{},D_{}\x00'.format(
                self.factory.session_id, self.factory.nst_token)).encode('utf-8')
            # print('sending message:', req)
            self.sendMessage(req)

        def onMessage(self, payload, isBinary):
            msg = payload.decode('utf-8')
            if "SPTBK_D23"in msg:
                tok = re.findall("\x01(.*?)$", msg)
                if len(tok) > 0:
                    Auto_token.append(_nst_decrypt(tok[0]))
                print(Auto_token)



    class MyFactory(WebSocketClientFactory, ReconnectingClientFactory):

        def clientConnectionFailed(self, connector, reason):
            self.retry(connector)

        def clientConnectionLost(self, connector, reason):
            global is_valit
            is_valit = False
            self.retry(connector)



    def get_session_id():
        headers = {
                "Host": "http://www.365api.vip/b365/soccer/test/oneHd2allEv/C1-G15?",
                "Connection": "keep-alive",
                "Origin": "http://www.365api.vip/b365/soccer/test/oneHd2allEv/C1-G15?",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
                "Accept": "*/*",
                "Referer": "http://www.365api.vip/b365/soccer/test/oneHd2allEv/C1-G15?/",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                "Cookie": "aps03=ct=42&lng=2",
            }
        url = 'http://www.365api.vip/b365/soccer/test/oneHd2allEv/C1-G15?/defaultapi/sports-configuration'
        for i in range(5):
            try:
                response = requests.get(url=url, headers=headers, verify=False)
                session_id = response.cookies['pstk']
                break
            except:
                continue
        print(session_id)
        return session_id

    def get_js_code():
        headers = {
            "Host": "http://www.365api.vip/b365/soccer/test/oneHd2allEv/C1-G15?",
            "Connection": "keep-alive",
            "Cache-Control": "max-age=0",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Referer": "http://www.365api.vip/b365/soccer/test/oneHd2allEv/C1-G15?/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
            'Cookie': 'aps03=ct=212&lng=2',
        }
        url = 'https://www.365api.vip/b365/soccer/test/oneHd2allEv/C1-G15?/'

        for i in range(5):
            response = requests.get(url=url, headers=headers, verify=False)
            txt = response.content.decode()

            code_lst = re.findall("function\(\)\{\}\}\)\(boot\|\|\(boot\=\{\}\)\);\!function\(\)(.*?),J=\(", txt)
            if len(code_lst) > 0:
                code = code_lst[0]
                return code
        raise Exception("错误{}".format(txt))

    def get_nst_token():
        code = get_js_code()
        nst_token = get_token(code)
        print(nst_token)
        return nst_token


    def stopReactor():
        print('Stopping reactor...')
        reactor.stop()  # 终止reactor

    def start_main():
        global is_valit
        is_valit = False

        USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
        url_auto = "wss://pshudws.365pushodds.com/zap/?uid=" + str(random.random())[2:]
        factory_auto = MyFactory(
            url_auto, useragent=USER_AGENT, protocols=['zap-protocol-v1'])

        # factory_auto = MyFactory(
        #     url_auto, useragent=USER_AGENT, protocols=['zap-protocol-v1'], proxy={'host': "127.0.0.1", 'port': 8888})
        factory_auto.protocol = SubClientProtocol
        factory_auto.headers = {}

        factory_auto.nst_token = get_nst_token()
        factory_auto.session_id = get_session_id()

        def accept(response):
            if isinstance(response, PerMessageDeflateResponse):
                return PerMessageDeflateResponseAccept(response)

        factory_auto.setProtocolOptions(perMessageCompressionAccept=accept)
        factory_auto.setProtocolOptions(perMessageCompressionOffers=[PerMessageDeflateOffer(
            accept_max_window_bits=True,
            accept_no_context_takeover=True,
            request_max_window_bits=0,
            request_no_context_takeover=True,
        )])
        if factory_auto.isSecure:
            contextFactory_auto = ssl.ClientContextFactory()
        else:
            contextFactory_auto = None


        url = "wss://premws-pt3.365pushodds.com/zap/?uid=" + str(random.random())[2:]
        factory = MyFactory(
            url, useragent=USER_AGENT, protocols=['zap-protocol-v1'])
        # factory = MyFactory(
        #     url, useragent=USER_AGENT, protocols=['zap-protocol-v1'], proxy={'host': "127.0.0.1", 'port': 8888})
        factory.protocol = MyClientProtocol
        factory.headers = {}

        factory.session_id = factory_auto.session_id
        factory.nst_token = factory_auto.nst_token
        # factory.session_id = '44263EAB3A86367F8DF053097CF36FBB000003'

        factory.setProtocolOptions(perMessageCompressionAccept=accept)
        factory.setProtocolOptions(perMessageCompressionOffers=[PerMessageDeflateOffer(
            accept_max_window_bits=True,
            accept_no_context_takeover=True,
            request_max_window_bits=0,
            request_no_context_takeover=True,
        )])
        # reactor.callFromThread(connectWS, factory)
        # reactor.run()
        if factory.isSecure:
            contextFactory = ssl.ClientContextFactory()
        else:
            contextFactory = None
        connectWS(factory, contextFactory)
        connectWS(factory_auto, contextFactory_auto)

        reactor.callLater(900, stopReactor)

        reactor.run()

    start_main()


if __name__ == '__main__':
    from multiprocessing import Process
    while True:
        process_list = []
        p = Process(target=pro_start,args=('Python',)) #实例化进程对象
        p.start()
        process_list.append(p)
        for i in process_list:
            i.join()
        print("hello, restart")
