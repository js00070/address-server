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

### 示例

```bash

# id为空代表查询省自治区一级的行政单位
curl localhost:8081/address?id=

# 返回结果
[{"code":"11","name":"北京市"},{"code":"12","name":"天津市"},{"code":"13","name":"河北省"},{"code":"14","name":"山西省"},{"code":"15","name":"内蒙古自治区"},{"code":"21","name":"辽宁省"},{"code":"22","name":"吉林省"},{"code":"23","name":"黑龙江省"},{"code":"31","name":"上海市"},{"code":"32","name":"江苏省"},{"code":"33","name":"浙江省"},{"code":"34","name":"安徽省"},{"code":"35","name":"福建省"},{"code":"36","name":"江西省"},{"code":"37","name":"山东省"},{"code":"41","name":"河南省"},{"code":"42","name":"湖北省"},{"code":"43","name":"湖南省"},{"code":"44","name":"广东省"},{"code":"45","name":"广西壮族自治区"},{"code":"46","name":"海南省"},{"code":"50","name":"重庆市"},{"code":"51","name":"四川省"},{"code":"52","name":"贵州省"},{"code":"53","name":"云南省"},{"code":"54","name":"西藏自治区"},{"code":"61","name":"陕西省"},{"code":"62","name":"甘肃省"},{"code":"63","name":"青海省"},{"code":"64","name":"宁夏回族自治区"},{"code":"65","name":"新疆维吾尔自治区"}]
```

```bash
curl localhost:8081/address?id=32

# 返回结果
[{"code":"3201","name":"南京市"},{"code":"3202","name":"无锡市"},{"code":"3203","name":"徐州市"},{"code":"3204","name":"常州市"},{"code":"3205","name":"苏州市"},{"code":"3206","name":"南通市"},{"code":"3207","name":"连云港市"},{"code":"3208","name":"淮安市"},{"code":"3209","name":"盐城市"},{"code":"3210","name":"扬州市"},{"code":"3211","name":"镇江市"},{"code":"3212","name":"泰州市"},{"code":"3213","name":"宿迁市"}]
```

```bash
curl localhost:8081/address?id=3201

# 返回结果
[{"code":"320102","name":"玄武区"},{"code":"320104","name":"秦淮区"},{"code":"320105","name":"建邺区"},{"code":"320106","name":"鼓楼区"},{"code":"320111","name":"浦口区"},{"code":"320113","name":"栖霞区"},{"code":"320114","name":"雨花台区"},{"code":"320115","name":"江宁区"},{"code":"320116","name":"六合区"},{"code":"320117","name":"溧水区"},{"code":"320118","name":"高淳区"}]
```

```bash
curl localhost:8081/address?id=320106

# 返回结果
[{"code":"320106001","name":"宁海路街道"},{"code":"320106002","name":"华侨路街道"},{"code":"320106003","name":"湖南路街道"},{"code":"320106004","name":"中央门街道"},{"code":"320106005","name":"挹江门街道"},{"code":"320106006","name":"江东街道"},{"code":"320106007","name":"凤凰街道"},{"code":"320106008","name":"下关街道"},{"code":"320106009","name":"热河南路街道"},{"code":"320106010","name":"幕府山街道"},{"code":"320106011","name":"建宁路街道"},{"code":"320106012","name":"宝塔桥街道"},{"code":"320106013","name":"小市街道"}]
```