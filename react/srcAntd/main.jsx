import React from "react"
import ReactDom from "react-dom"
import Router from "./router"

import {Provider} from "react-redux"
import store from "./store"

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

ReactDom.render(
    <Provider store={store}>
        <Router />
    </Provider>
    ,document.getElementById("root"))