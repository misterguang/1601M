import React, { Component } from 'react'

export default class A extends Component {
    render() {
        return (
            <div>
                <h2>A</h2>
                {this.props.children}
            </div>
        )
    }
}
