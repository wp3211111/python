from distutils.debug import DEBUG
from pathlib import Path
from pickle import TRUE

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = True

SECRET_KEY = '1234567890'

SQLALCHEMY_DATABASE_URI = 'mysql://root:root@127.0.0.1:3306/flask_test'

SQLALCHEMY_COMMIT_ON_TEARDOWN = True

SQLALCHEMY_TRACK_MODIFICATIONS = True

