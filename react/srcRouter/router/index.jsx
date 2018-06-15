import React from "react"
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import App from "../components/app"
import Index from "../components/index"
import PCIndex from "../components/pc"
import Money from "../components/pc/money"
import Collect from "../components/pc/collect"
import Buycar from "../components/buyCar/index"
import Filter from "../components/buyCar/filter"
import Content from "../components/buyCar/content"



function RouterCom(){
    return  <Router>
                <App>
                    <Switch>
                        <Route exact path='/' component={Index}/>
                        <Route path='/pc' render={PcRouter}/>
                        <Route path='/buyCar' render={BuycarRouter}/>
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
            </Buycar>
}

export default RouterCom