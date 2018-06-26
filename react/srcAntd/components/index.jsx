import React, { Component } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
import {
    connect
} from "react-redux"
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

 class Index extends Component {
    constructor(props){
        super(props)
       
    }
    render() {
        
        return (
            <div>
                <h2>首页</h2>
                <ul>
                    <li>
                    <Button type="primary">primary</Button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect((state)=>state)(Index)