#!/usr/bin/python
# -*- coding: UTF-8 -*-
import time
import random
from flask import Blueprint
from response import Response

login_bp = Blueprint('login', __name__, url_prefix='/login')


@login_bp.route('info')
def login_info():
    response = Response(data={
        'time': int(time.time()),
        'count_list': [
            random.randint(100, 1000), random.randint(0, 100), random.randint(0, 100),
            random.randint(0, 100), random.randint(0, 100)
        ]
    })
    return response.to_json()
