from typing_extensions import TypeAlias


class Node (object):
    def __init__(self,value=None,next=None):
        self.value,self.next = value,next
        
class LinkedList(object):
    def __init__(self,maxsize=None):
        self.maxsize = maxsize
        self.root = Node()
        self.length = 0
        self.tailnode = None
    def __len__(self):
        return self.length
    def append(self,value):
        if self.maxsize is not None and len(self) > self.maxsize:
            raise Exception('full')
        node = Node()
        tailNode = self.tailnode
        if tailNode is  None:
            self.root.next = node
        else:
            tailNode.next = node
        self.tailnode = node
        self.length += 1

    def appendLeft (self,value):
        headNode = self.root.next
        node = Node(value)
        self.root.next = node
        node.next = headNode
        self.length += 1
    def iter_node(self):
        curnode = self.root.next
        while curnode is not self.tailnode:
            yield curnode
            curnode = curnode.next
        yield curnode
    def __iter__(self):
        for node in self.iter_node():
            yield node.value
    def remove(self,value):
        prevnode = self.root
        curnode = self.root.next
        for curnode in  self.iter_node():
            if curnode.value == value:
                prevnode.next = curnode.next
                if curnode is self.tailnode:
                    self.tailnode = prevnode
                del curnode
                self.length -= 1
                return 1
        return -1
    def find(self,value):
        index = 0
        for node in self.iter_node():
            if node.value == value:
                return index
            index += 1
        return -1
    def  popleft(self):
        if self.root.next is None:
            raise Exception('pop from empty LinkedList')
        headNode = self.root.next
        self.root.next = headNode.next
        self.length -= 1
        value = headNode.value
        del headNode
        return value
    def  clear(self):
        for node in self.iter_node():
            del node
        self.root.next = None
        self.length = 0
            
        

        
