#!/usr/bin/python
# -*- coding: UTF-8 -*-

from flask import Flask, jsonify
from flask_cors import CORS
from controller import login_controller

app = Flask(__name__)
app.register_blueprint(login_controller.login_bp)


@app.route('/', methods=['GET'])
def hello_world():
    return 'hello world'


if __name__ == '__main__':
    CORS(app, supports_credentials=True)
    app.run()
