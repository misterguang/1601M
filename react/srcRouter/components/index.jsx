import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"

export default class Index extends Component {
    render() {
        return (
            <div>
                首页
                <ul>
                    <li>
                        <Link to="/pc/money">金钱页</Link>
                    </li>
                    <li>
                        {/* <Link to="/pc/collect">收藏页</Link> */}
                        <Link to={{
                            pathname: '/pc/money',
                            search: '?sort=name',
                            state: { fromDashboard: true }
                        }}>收藏页</Link>
                        
                    </li>
                    <li>
                        <Link to="/buyCar/content">买车</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
