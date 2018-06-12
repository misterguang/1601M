import React, { Component } from 'react'
import Child from "./child"

export default class Parent extends Component {

    constructor(props){
        super(props)
        this.state={
            name:"父组件name",
            age:32,
            msg:""
        }

    }
   
    componentDidMount(){
        console.log("父did")
        this.setState({
            msg:sessionStorage.getItem("msg")
        })
    }
    // 回掉函数
    // calback(msg){
    //  this.setState({
    //      msg
    //  })
    // }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <p>{this.state.msg}</p>
                {/* <Child {...this.state} calback={this.calback.bind(this)}/> */}
                <Child {...this.state} />
            </div>
        )
    }
}
