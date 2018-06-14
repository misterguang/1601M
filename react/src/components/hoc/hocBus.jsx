import React, { Component } from 'react'

// 数据逻辑层

var globalData={
    data:{
        msg:""
    }
    // cbArr:{}
}

export default function(Com){
    return class  extends Component {
        constructor(props){
            super(props)
           
            this.state=globalData.data
            
            this.bus={
                // $on(event,cb){
                //     if(!globalData.cbArr.hasOwnProperty(event)){
                //         globalData.cbArr[event]=[cb]
                //     }else{
                //         globalData.cbArr[event].push(cb)
                //     }
                // },
                $emit:(event,attr,...data)=>{
                    if(globalData.data.hasOwnProperty(attr)){
                      
                        this.setState({[attr]:data[0]})
                    }
                    // if(!globalData.cbArr[event]){
                    //     return 
                    // }
                   
                    // globalData.cbArr[event].forEach((i)=>{
                    //     i(...data)
                    // })
                },
                // destroyed(event){
                //     delete globalData.cbArr[event] 
                // }   
            }
        }
        render() {
           
            return <Com {...this.state}  {...this.bus}/>
        }
    }
    
} 