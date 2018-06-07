import React, { Component } from 'react'


class LifeRound extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"父组件",
            age:this.props.age
        }
        // 1、初始数据的定义；
        // 2、对于一些项目状态的检测
        
        this.setState({
            data:data
        })
        console.log("父组件constructor")
    }
    componentWillMount(){
        // 1、在初次render之前，最后一次可以改变的state地方
        console.log("父组件componentWillMount")
    }
    changeHandle(){
        console.log(this)
        this.setState({
            name:"父组件"
        })
    }
    render(){
        // 1、这里为纯函数（不做数据的存储，以及数据的产生）
        // 2、必须返回一个jsx对象
        // 3、不管是初次加载，还是更新，react视图只要改变，就必须执行render函数；

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
    componentWillReceiveProps(props){
        // 1、当props的值赋给state进行渲染时，必须在这里做一个props数据改变的监听，每一次props改变，将最新的值赋给state进行渲染
        // 2、此钩子函数只在props改变的时候执行

        console.log("父组件componentWillReceiveProps")
        this.setState({
            age:props.age
        })
    }
    shouldComponentUpdate(newProps,newState){
        // 1、当state和props改变的时候都会执行此函数，每一次执行setState，不管数据有没有更新，也会执行此函数
        // 2、此函数具有返回值（boolen），true时，正常执行render进行dom数据的编译，false是，不执行render，更新到此中断；
        // 3、一般此函数用来对比新的props和state，决定要不要执行render进行更新；
        console.log(newState)
        console.log("父组件shouldComponentUpdate")
        return newState.name!==this.state.name
    }
    componentWillUpdate(){
        // 
        console.log("父组件componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("父组件componentDidUpdate")
        // dom操作
    }
    componentWillUnmount(){
        // 当组件卸载时，把当前组件的时间监听，计时器，插件等dom操作相关的进行销毁
        console.log("父组件componentWillReceiveProps")
    }

}

export default LifeRound