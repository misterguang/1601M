import React, { Component } from 'react'
import  Style from "../css/app.css"

export default class App extends Component {
    render() {
        return (
            <div className={Style.root}>
                {this.props.children}
            </div>
        )
    }
}
