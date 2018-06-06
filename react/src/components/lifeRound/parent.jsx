import React, { Component } from 'react'


class LifeRound extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"父组件",
            age:this.props.age
        }
        console.log("父组件constructor")
    }
    componentWillMount(){
        console.log("父组件componentWillMount")
    }
    changeHandle(){
        console.log(this)
        this.setState({
            name:"父组件"
        })
    }
    render(){
        console.log("父组件render")
        return <div>
            <h2>生命周期展示</h2>
            <p>{this.state.name}</p>
            <p>{this.props.age}</p>
            <button onClick={()=>this.changeHandle()}>点击改变</button>
        </div>
    }
    componentDidMount(){
        console.log("父组件componentDidMount")
        // 针对一切dom操作；事件监听，计时器，插件的实例化
    }

    // 更新阶段
    // componentWillReceiveProps(props){
    //     console.log("父组件componentWillReceiveProps")
    //     this.setState({
    //         age:props.age
    //     })
    // }
    // shouldComponentUpdate(newProps,newState){
    //     console.log(newState)
    //     console.log("父组件shouldComponentUpdate")
    //     return newState.name!==this.state.name
    // }
    componentWillUpdate(){
        console.log("父组件componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("父组件componentDidUpdate")
        // dom操作
    }
    componentWillUnmount(){
        console.log("父组件componentWillReceiveProps")
    }

}

export default LifeRound