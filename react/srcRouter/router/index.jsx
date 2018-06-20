import React from "react"
import {
    // HashRouter as Router,
    // MemoryRouter as Router,
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Prompt,
    Link
} from "react-router-dom"

import App from "../components/app"
import Index from "../components/index"
import PCIndex from "../components/pc"
import Money from "../components/pc/money"
import Collect from "../components/pc/collect"
import Buycar from "../components/buyCar/index"
import Filter from "../components/buyCar/filter"
import Content from "../components/buyCar/content"
import CarType from "../components/buyCar/carType"
import Audio from "../components/audio"
import Navl from "../components/navLink"
import AsyncComponentRoute from "./asyncRouterComponent"


function RouterCom(){
    return  <Router basename="/">
                <App>
                    <Switch>
                         <Route exact path='/' render={()=>{
                            return <Redirect to="/index" />
                        }}/>
                        <Route path='/index' component={Index}/>
                        <Route path='/pc' render={PcRouter}/>
                        <Route path='/buyCar' render={BuycarRouter}/>
                        <Route path='/audio' component={Audio}/>
                        <Route path='/navLink' component={NavL}/>
                        <Route path="/asyncRouter" component={AsyncComponentRoute} />
                        <Route path='/prompt' render={()=>{
                            return (
                                <div>
                                这里是prompt
                                <Prompt when={true} message="Are you sure you want to leave?"/>
                                <Link to="/">跳转</Link>
                                </div>
                            )
                        }}/>

                    </Switch>
                </App>
             </Router>
}
// component可以渲染任何状态的组建
// render只能渲染无状态组件

// 创建pc的二级路由

var PcRouter=()=>{
    return <PCIndex>
                <Route path='/pc/money' component={Money}/>
                <Route path='/pc/collect' component={Collect}/>
            </PCIndex>
}

var BuycarRouter=()=>{
    return <Buycar>
                <Route path='/buyCar/filter' component={Filter}/>
                <Route path='/buyCar/content' component={Content}/>
                <Route path='/buyCar/carType' component={CarType}/>
            </Buycar>
}


// 

var NavL=()=>{
    return <Navl>
            <Route path='/navLink/a' render={()=><h2>a标签</h2>}/>
            <Route path='/navLink/b' render={()=><h2>b标签</h2>}/>
            <Route path='/navLink/c' render={()=><h2>c标签</h2>}/>
    </Navl>
}





export default RouterCom