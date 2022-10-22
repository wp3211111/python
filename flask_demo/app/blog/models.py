from datetime import datetime
from enum import IntEnum

from sqlalchemy.dialects.mysql import LONGTEXT

from RealProject import db

class BaseModel(db.Model):
    #基类模型

    __abstract__ = True

    add_date = db.Column(db.DateTime,nullable = False, default = datetime.utcnow)
    # 更新时间
    pub_date = db.Column(db.DateTime,nullable = False, default = datetime.utcnow,onupdate = datetime.utcnow)

class PostPublishType(IntEnum):
    # 文章发布类型
    draft = 1
    show = 2



class Category(db.Model):
    id  = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(128),nullable = False)
    icon = db.Column(db.String(128),nullable = True)
    add_data = db.Column(db.DateTime,nullable = False,default = datetime.utcnow)
    pub_date =  db.Column(db.DateTime,nullable = False, onupdate=datetime.utcnow, default = datetime.utcnow)
    # post = db.relationship("Post",back_populates='category')
    post = db.relationship("Post",backref='category',lazy = True)


    def __repr__(self) :
        return '<category %r>' % self.name

# 多对多关系帮助器表
tags = db.Table('tags',
    db.Column('tag_id',db.Integer,db.ForeignKey('tag.id'),primary_key = True),
    db.Column('post_id',db.Integer,db.ForeignKey('post.id'),primary_key = True)
)



#文章模型
class Post(BaseModel):
    id = db.Column(db.Integer,primary_key = True)
    title = db.Column(db.String(128),nullable = False)
    desc = db.Column(db.String(200),nullable = True)
    content = db.Column(LONGTEXT,nullable = False)
    has_type = db.Column(db.Enum(PostPublishType),server_default= 'show',nullable=False)
    category_id = db.Column(db.Integer,db.ForeignKey('category.id'),nullable = False)
    #多对多关系
    tags = db.relationship("Tag",secondary = tags ,lazy = 'subquery',backref = db.backref('post',lazy = True))

    def __repr__(self) :
        return '<Post %r>' % self.title


#文章标签模型
class Tag(BaseModel):
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(128),nullable = False,unique = True)

    def __repr__(self) :
        return  self.name


