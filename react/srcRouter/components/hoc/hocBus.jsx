import React, { Component } from 'react'

// 数据逻辑层

var globalData={
    initState:{

    },
    cbArr:[],
    dispatch:function(attr,data){
        
       this.initState[attr]=data
       this.cbArr.forEach(i => {
           i(this.initState)
       });
    },
    subScript:function(cb){
        this.cbArr.push(cb)
    }
}

export default function(Com,att){
    return class  extends Component {
        constructor(props){
            super(props)
        }
        render() {
            // console.log(this.state)
            return <Com {...globalData} {...this.props}/>
        }
    }
    
} 