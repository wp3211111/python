from logging import exception
from flask import Blueprint,Flask, flash, render_template,request,redirect, url_for,session,g
from ..models import User
from werkzeug.security import check_password_hash,generate_password_hash
from RealProject import db
#

bp  =  Blueprint('auth',__name__,url_prefix='/auth',template_folder='../templates',static_folder='../static')

@bp.before_app_request
def load_logged_in_user():
    user_id = session.get('user_id')
    if user_id is None:
        g.user = None
    else:
        g.user = User.query.get(int(user_id))

@bp.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        # js = json.dumps(request, sort_keys=True, indent=4, separators=(',', ':'))
        userObj = request.form.to_dict()
        username = userObj.get("username")
        password = userObj.get("password")
        try:
            user = User.query.filter_by(username = username).first()
            if not check_password_hash(user.password,password) :
                 return ('密码不正确，请重新输入')
            elif user is None:
                flash('用户不存在,请注册后登录')
                return ('用户不存在,请注册后登录')
            else:
                session.clear()
                session['user_id'] = user.id
                return '登录成功'
                 #login
                print(user)
        except exception:
            print(exception)
            pass
        print(userObj.get("username"))
        print(userObj.get("password"))
        return '登录成功'
    return render_template('login.html')


@bp.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        # js = json.dumps(request, sort_keys=True, indent=4, separators=(',', ':'))
        userObj = request.form.to_dict()
        username = userObj.get("username")
        password = userObj.get("password")
        comfrimPassword = userObj.get("comfrimPassword")

        try:
            if password != comfrimPassword:
               print('两次密码输入不一致')
               return '两次密码输入不一致'
               return redirect(url_for('auth.register'))
            user = User.query.filter_by(username = username).first()
            if user:
               flash('该用户已经注册,请勿重复注册')
               return '该用户已经注册,请勿重复注册'
            else:
                u = User(username = username,password = generate_password_hash(password))
                db.session.add(u)
                db.session.commit()
                #自动登录效果
                session.clear()
                session['user_id'] = u.id

            return '注册成功'
        except exception:
            pass
        return '注册成功'
    return render_template('register.html')


@bp.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))
