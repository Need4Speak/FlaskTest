#!/usr/bin/python
# -*- coding: UTF-8 -*-

from flask import Flask, redirect, url_for, render_template
from flask_cors import CORS
from controller import login_controller

app = Flask(__name__)
app.register_blueprint(login_controller.login_bp)
CORS(app, supports_credentials=True)


@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
