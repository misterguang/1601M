import React, { Component } from 'react'
import PropTypes from "prop-types"

class Child extends Component {
    static propTypes={
        name:PropTypes.string.isRequired
    }
    static defaultProps={
        age:123
    }
    constructor(props){
        super(props)
        this.state={
            addr:"beijing"
        }
    }
    changeState(){

        // 当改变完state数据后，立即将新的数据存入redux，或者是用此数据进行ajax接口的调用时；
        this.setState({
            addr:"nanjing"
        },()=>{
            console.log(this.state.addr)
        })
        // setTimeout(()=>{
        //     console.log(this.state.addr)
        // },1000)
       
    }
    render() {
        return (
            <div>
                <h2>子组件</h2>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.state.addr}</p>
                <button onClick={this.changeState.bind(this)}>点击</button>
            </div>
        )
    }
}


console.log(1)
setTimeout(()=>{
    console.log(2)
})
console.log(3)

// Child.propTypes={     //组件全局进行配置
// 	name:PropTypes.string.isRequired
// }

export default Child