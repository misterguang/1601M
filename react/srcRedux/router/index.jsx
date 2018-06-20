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
export default function(){
    return <Router>
            <App>
                <Index />
                <Msg />
                <Route exact path='/' render={()=>{
                    return <Redirect to="/index" />
                }}/>
            </App>
    </Router>
}