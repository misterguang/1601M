import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"



import App from "../components/app"
import  Index from "../components/index"
import  Msg from "../components/msg"
import  MsgReactRedux from "../components/msg_react_redux"
import  Shopping from "../components/shopping"
import  SyncRedux from "../components/syncRedux"
import  Tm from "../components/tm"
import  Zfb from "../components/zfb"
export default function(){
    return <Router>
            <App>
                <Index />
                <Msg />
                <MsgReactRedux />
                <Shopping />
                <SyncRedux />
                <Tm />
                <Zfb />
                <Route exact path='/' render={()=>{
                    return <Redirect to="/Tm" />
                }}/>
            </App>
    </Router>
}