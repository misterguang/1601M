import React, { Component } from 'react'

export default class Pc extends Component {
    render() {
        return (
            <div>
                <h2>个人中心</h2>
                {this.props.children}
            </div>
        )
    }
}
