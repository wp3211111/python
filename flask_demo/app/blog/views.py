from flask import Blueprint,Flask, render_template
#
bp  =  Blueprint('blog',__name__,url_prefix='/blog',template_folder='templates',static_folder='static')

def index():
    posts = [1,2,3,4,5,6]
    return  render_template('index.html',posts = posts)

# @bp.route("/index")
# def home():
#     posts = [1,2,3,4,5,6]
#     return  render_template('index.html',posts = posts)
