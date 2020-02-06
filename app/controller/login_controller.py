#!/usr/bin/python
# -*- coding: UTF-8 -*-
import time
import random
from flask import Blueprint, render_template
from response import Response

login_bp = Blueprint('login', __name__, url_prefix='/login')


@login_bp.route('info')
def info():
    response = Response(data={
        'time': int(time.time()),
        'count_list': [
            random.randint(100, 1000), random.randint(0, 100), random.randint(0, 100),
            random.randint(0, 100), random.randint(0, 100)
        ]
    })
    return response.to_json()


@login_bp.route('login_info')
def login_info():
    return render_template('login_info.html')
