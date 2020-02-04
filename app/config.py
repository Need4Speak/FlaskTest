# -*- coding: UTF-8 -*-
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))


# 定义配置基类
class Config(object):
    # 文件上传的位置
    MAX_CONTENT_LENGTH = 8 * 1024 * 1024
    UPLOADED_PHOTOS_DEST = os.path.join(BASE_DIR, 'static/uploads')

    # 额外的初始化操作
    @staticmethod
    def init_app(app):
        pass


# 开发环境配置
class DevelopmentConfig(Config):
    pass


# 测试环境配置
class TestConfig(Config):
    pass


# 生产环境
class ProductionConfig(Config):
    pass


# 生成一个字典，用来根据字符串找到对应的配置类。
config = {
    'development': DevelopmentConfig,
    'testing': TestConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
