#!/usr/bin/python
# -*- coding: UTF-8 -*-
from flask import jsonify


class Response(object):
    def __init__(self, data, success=True, msg=None):
        self.data = data
        self.success = success
        self.msg = msg

    def to_json(self):
        return jsonify(self.__dict__)
