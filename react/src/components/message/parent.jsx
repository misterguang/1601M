import React, { Component } from 'react'
import Child from "./child"

export default class Parent extends Component {

    constructor(props){
        super(props)
        this.state={
            name:"父组件name",
            age:32
        }
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                    
                {/* <Child name={this.state.name} age={this.state.age}/> */}
                <Child {...this.state}/>
            </div>
        )
    }
}
