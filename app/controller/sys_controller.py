#!/usr/bin/python
# -*- coding: UTF-8 -*-
import psutil
from flask import Blueprint, render_template
from response import Response

sys_bp = Blueprint('sys', __name__, url_prefix='/sys')


@sys_bp.route('info')
def info():
    cpu_use = psutil.cpu_percent()
    mem_use = psutil.virtual_memory().percent
    response = Response(data={
        'cpu_use': cpu_use,
        'mem_use': mem_use
    })
    return response.to_json()


if __name__ == '__main__':
    print psutil.cpu_percent()
    print psutil.virtual_memory().percent
