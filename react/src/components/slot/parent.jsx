import React, { Component } from 'react'
import Child from "./child"

export default class Parent extends Component {

    render() {
        var one=<p>第一个标签</p>
        var two=<p>第二个标签</p>
        return (
            <div>
                <h1>父组件</h1>
                <Child one={one} two={two}>
                    <p>父组件定义的</p>
                </Child>
            </div>
        )
    }
}
