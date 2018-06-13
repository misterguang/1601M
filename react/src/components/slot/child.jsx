import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <h3>子组件</h3>
                {this.props.one}
                {this.props.two}
                {this.props.children}
            </div>
        )
    }
}
