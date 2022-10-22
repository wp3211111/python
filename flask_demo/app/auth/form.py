from re import U
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired,Length,ValidationError,EqualTo
from werkzeug.security import check_password_hash

class  LoginForm(FlaskForm):
    def qs_username(username):
        u = f'C_(username)123456'
        return u
    username = StringField(validators=[DataRequired(message="不能为空"),Length(max=32,message="用户名最长32位")
    ] ,filters=(qs_username))

