import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"

export default class  extends Component {
    render() {
        return (
            <div>
                <Link to={`/asyncRouter/one`}>one路由</Link>
                <Link to={`/asyncRouter/two`}>two路由</Link>
                {this.props.children}
            </div>
        )
    }
}
