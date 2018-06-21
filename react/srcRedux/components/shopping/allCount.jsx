import React, { Component } from 'react'
import Style from "../../css/shopping.css"
import Store from "../../store"
export default class AllCount extends Component {
    constructor(props){
        super(props)
        this.state={
            allNum:0,
            allCount:0
        }
        Store.subscribe(()=>{
            this.computed()
        })
    }
    computed(){
        let num=0
        let count=0
        Store.getState().shoppingList.forEach(i => {
            if(i.state){
                num+=i.num
                count+=parseInt(i.num)*parseInt(i.price)
            }   
        });
        this.setState({
            allNum:num,
            allCount:count
        })
    }
    render() {
        return (
            <div className={Style.allCount}>
                <span>总数量：{this.state.allNum}</span>
                <span>总价：{this.state.allCount}</span>
            </div>
        )
    }
}
