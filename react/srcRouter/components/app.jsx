import React, { Component } from 'react'
import Style from "../css/app"
import {
    Link
} from "react-router-dom"
export default class App extends Component {
    render() {
        return (
            <div className={Style.app}>
                <Link to="/pc/money">金钱页</Link>
                {/* <Link to="/pc/collect">收藏页</Link> */}
                <Link to={{pathname: '/pc/money', 
                            search: '?sort=name',
                            state: { fromDashboard: true }
                            }}>收藏页</Link>
               {this.props.children}
            </div>
        )
    }
}
