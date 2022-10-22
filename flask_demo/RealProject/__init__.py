import os
from RealProject.setting import BASE_DIR
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app(test_config=None):
    app = Flask(__name__,instance_relative_config=True)

    if test_config is None:
        CONFIG_PATH = BASE_DIR / "RealProject/setting.py"
        app.config.from_pyfile(CONFIG_PATH,silent=True)
    else:
        app.config.from_mapping(test_config)

    db.init_app(app)
    migrate.init_app(app,db)

    from app.blog import views as blog
    app.register_blueprint(blog.bp)
    from app.auth import views as auth
    app.register_blueprint(auth.bp)
    # url
    app.add_url_rule('/',endpoint='index',view_func=blog.index)
    # 注册数据库模型
    from app.blog import models
    from app.auth import models


    return app


# app = Flask(__name__)
# @app.route("/")
# def home():
#     return '<h1 style="color:#ff7300">hello , Flask1123123<h1>'
