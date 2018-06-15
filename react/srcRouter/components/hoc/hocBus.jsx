import React, { Component } from 'react'

// 数据逻辑层

var globalData={

}

export default function(Com,att){
    return class  extends Component {
        constructor(props){
            super(props)
            let currentData=globalData
            if(att){
                if(!globalData.hasOwnProperty(att)){
                    currentData=Object.assign(globalData,{[att]:null})
                }
            }
            this.state=Object.assign(currentData,{
                dispatch:(attr,...data)=>{
                    if(currentData.hasOwnProperty(attr)){
                        this.setState({[attr]:data[0]})
                    }
            }})
            console.log(props)
           
        }
        render() {
            console.log(1111)
            return <Com {...this.state} {...this.props}/>
        }
    }
    
} 