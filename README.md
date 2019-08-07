# 使用说明

## 数据来源

此项目使用的provinces.json、cities.json、areas.json以及streets.json均来自于 https://github.com/modood/Administrative-divisions-of-China
若有需要可替换更新

## 生成addressMap.json

运行generate.py脚本，会整合生成一个addressMap.json，供nodejs读取

## 启动微服务

安装依赖后，可以直接启动，也可以使用docker启动，端口8081

docker仓库地址：https://hub.docker.com/r/js00070/address-server 

## 调用方式

GET方法，/address?id={}，参数id为省市区县的id，返回其下辖的次一级行政区域列表

编码规则与 https://github.com/modood/Administrative-divisions-of-China 相同