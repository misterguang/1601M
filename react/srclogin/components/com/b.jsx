import React, { Component } from 'react'

export default class B extends Component {
    render() {
        return (
            <div>
                <h2>B</h2>
                {this.props.children}
            </div>
        )
    }
}
