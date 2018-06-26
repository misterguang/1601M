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

let userList=[
    {
        username:"zhangsan",
        password:"1q2w3e",
        userId:1
    }
]
let num=1
var bodyParser = require('body-parser');
module.exports=function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.post("/api/login",function(req,res,next){
        let {username,password}=req.body
        console.log(req.body)
        let user
        let state=userList.some((i)=>{
            if(i.username==username&&i.password==password){
                user=i
                return true
            }else{
                return false
            }
        })
        if(state){
            res.send(JSON.stringify({
                code:"1001",
                msg:"用户登录成功",
                data:user.userId
            }))
        }else{
            res.send(JSON.stringify({
                code:"1002",
                msg:"用户登录失败"
            }))
        }
       
    })
    app.post("/api/register",function(req,res,next){
        let {
            username,
            password
        }=req.body
        console.log(username,password)
        let state=userList.some((i)=>{
            if(i.username==username){
                return true
            }else{
                return false
            }
        })

        if(!state){
            num++
            userList.push({username,password,userId:num})
            console.log(userList)
            res.send(JSON.stringify({
                code:"1003",
                msg:"用户创建成功"
            }))
        }else{
            res.send(JSON.stringify({
                code:"1004",
                msg:"用户创建失败"
            }))
        }
    })
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