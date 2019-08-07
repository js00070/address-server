from flask import Flask
import json
app = Flask(__name__)

provinces = []
cities = []
areas = []
streets = []

def init():
    # print("读取json，初始化addressMap")
    with open("provinces.json","r",encoding='utf-8') as f:
        provinces = json.load(f)
        # print(provinces)
    with open("cities.json","r",encoding='utf-8') as f:
        cities = json.load(f)
        # print(cities)
    with open("areas.json","r",encoding='utf-8') as f:
        areas = json.load(f)
    with open("streets.json","r",encoding='utf-8') as f:
        streets = json.load(f)
    # print(provinces)

    addr_map = {}
    for item in provinces:
        addr_map[item["code"]] = {"name": item["name"],"cities": {} }
    for item in cities:
        pcode = item["provinceCode"]
        ccode = item["code"]
        addr_map[pcode]["cities"][ccode] = { "name": item["name"], "areas": {} }
    for item in areas:
        pcode = item["provinceCode"]
        ccode = item["cityCode"]
        acode = item["code"]
        addr_map[pcode]["cities"][ccode]["areas"][acode] = { "name": item["name"], "streets": {} }
    
    for item in streets:
        pcode = item["provinceCode"]
        ccode = item["cityCode"]
        acode = item["areaCode"]
        scode = item["code"]
        addr_map[pcode]["cities"][ccode]["areas"][acode]["streets"][scode] = { "name": item["name"] }

    # print(addr_map)

    with open("addressMap.json","w",encoding='utf-8') as f:
        json.dump(addr_map,f)


if __name__ == "__main__":
    init()

    