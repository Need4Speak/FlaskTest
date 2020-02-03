#!/usr/bin/python
# -*- coding: UTF-8 -*-
import time
from flask import Blueprint
from response import Response

login_bp = Blueprint('login', __name__, url_prefix='/login')


@login_bp.route('info')
def login_info():
    response = Response(data={'time': int(time.time())})
    return response.to_json()
