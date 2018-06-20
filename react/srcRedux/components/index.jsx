import React, { Component } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
 class Index extends Component {
    render() {
        return (
            <div>
                <h2>首页</h2>
                <ul>
                    <li>
                        <Link to="/Msg">通讯</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ()=><Route path="/index" component={Index}/>