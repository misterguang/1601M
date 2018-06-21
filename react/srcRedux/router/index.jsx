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
import  Shopping from "../components/shopping"
export default function(){
    return <Router>
            <App>
                <Index />
                <Msg />
                <Shopping />
                <Route exact path='/' render={()=>{
                    return <Redirect to="/shopping" />
                }}/>
            </App>
    </Router>
}