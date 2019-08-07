//express_demo.js 文件
const express = require('express')
const fs = require("fs")
const app = express()


const str = fs.readFileSync('addressMap.json')
const addressMap = JSON.parse(str)

// /address?id=****
app.get('/address', function (req, res) {
    const resList = []

    const extractFromMap = function(addr_map){
        for(let code in addr_map){
            let item = {
                "code": code,
                "name": addr_map[code].name
            }
            resList.push(item)
        }
    }
    try{
        const query_id = req.query.id
        console.log(query_id)
        // 省级
        if(query_id.length == 2){
            const cityMap = addressMap[query_id].cities
            extractFromMap(cityMap)
        }
        // 市级
        if(query_id.length == 4){
            const province_id = query_id.slice(0,2)
            const cityMap = addressMap[province_id].cities
            const areaMap = cityMap[query_id].areas
            extractFromMap(areaMap)
        }
        // 区县级
        if(query_id.length == 6){
            const province_id = query_id.slice(0,2)
            const city_id = query_id.slice(0,4)
            const cityMap = addressMap[province_id].cities
            const areaMap = cityMap[city_id].areas
            const streetMap = areaMap[query_id].streets
            extractFromMap(streetMap)
        }
        // 街镇级
        if(query_id.length == 9){
            console.log("街镇级请求")
        }
    }catch(e){
        console.log(e)
    }
    
    res.send(JSON.stringify(resList));
})
 
const server = app.listen(8081, function () {
 
    const host = server.address().address
    const port = server.address().port
 
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})