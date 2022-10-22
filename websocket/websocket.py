from pydoc import cli
from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket
import logging
from datetime import datetime
clients = []
class SimpleChat(WebSocket):

    def handleMessage(self):
       for client in clients:
          logging.log(client)
          if client != self:
             client.sendMessage(self.address[0] + u' - ' + self.data )

    def handleConnected(self):
       print(self.address, 'connected')
       for client in clients:
          client.sendMessage(self.address[0] + u' - connected')
       clients.append(self)

    def handleClose(self):
       clients.remove(self)
       print(self.address, 'closed')
       for client in clients:
          client.sendMessage(self.address[0] + u' - disconnected')

server = SimpleWebSocketServer('', 8000, SimpleChat)
server.serveforever()