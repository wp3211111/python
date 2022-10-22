from flask import Flask
from flask_cors import *

app =  Flask(__name__)
CORS(app,supports_credentials=True)


@app.route("/")
def hello_world():
    return "hello World!"

if __name__ == "main":
    app.run(host='127.0.0.1',port=5000,debug=True)