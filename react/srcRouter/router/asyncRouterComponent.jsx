import React from "react"
import {
    Route,
    Switch,
} from "react-router-dom"

import AsyncRoute  from "../components/asyncRouterComponent/index"

import asyncGet from "./asyncGet.jsx"

var getOne=()=>{
    return import("../components/asyncRouterComponent/one")
}

let One=asyncGet(getOne)


import asyncRequire from "./asyncRequire"

let Two=asyncRequire(()=>require("../components/asyncRouterComponent/two"))



// 创建懒加载的二级路由

let asyncComponentRoute=()=>{
    return <AsyncRoute>
            <Route path='/asyncRouter/one' component={One}/>
            <Route path='/asyncRouter/two' component={Two}/>
        </AsyncRoute>

}

export default asyncComponentRoute