var Mock = require("mockjs")
var carClass=require("./carClass.js")

var Random = Mock.Random
var list = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-100': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'price': Math.ceil(Math.random() * 9),
        'name': "@cname",
        'addr': "@city",
        "content": "@cparagraph"
    }]
})

module.exports=function(app){
    app.get("/api/hocGetData",function(req,res,next){
        res.send({
            obj:{
                name:"zhangsan"
            }
        })
    })
    app.get("/api/hocGetData1",function(req,res,next){
        res.send(list)
    })

    

    app.get("/api/carClass",function(req,res,next){
        res.send(carClass)
    })
    app.get("/api/shopClass",function(req,res,next){
        let data=[
            {
                id:0,
                price:"10.00",
                num:1,
                name:"iphone1",
                state:true
            },
            {
                id:1,
                price:"50.00",
                num:1,
                name:"iphone2",
                state:false
            },
            {
                id:2,
                price:"40.00",
                num:1,
                name:"iphone3",
                state:true
            },
            {
                id:3,
                price:"30.00",
                num:1,
                name:"iphone4",
                state:false
            }
        ]
        res.send(data)
    })
}