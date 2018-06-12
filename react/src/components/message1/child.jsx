import React, { Component } from 'react'
import PropTypes from "prop-types"

class Child extends Component {
    static propTypes={
        name:PropTypes.string.isRequired
    }
    static defaultProps={
       
    }
    constructor(props){
        super(props)
        this.state={
            msg:"beijing"
        }
        // props.calback(this.state.msg)/
    }
    changeState(){
        this.setState({
            msg:"nanjing"
        },()=>{
            // this.props.calback(this.state.msg)
        })
        
    }
   
    componentDidMount(){
        console.log("子did")
        sessionStorage.setItem("msg",this.state.msg)
    }

    

    render() {
        return (
            <div>
                <h2>子组件</h2>
                <button onClick={this.changeState.bind(this)}>点击</button>
            </div>
        )   
    }
}




export default Child