import React, { Component } from 'react'
import Style from "../../css/shopping.css"
import Store, { actions } from '../../store';
export default class Item extends Component {
    constructor(props){
        super(props)
        this.state={
            item:this.props.data
        }
    }
    changeHandle(){
        let obj={
            ...this.state.item,
            ...{state:!this.state.item.state}
        }
       
        this.setState({
            item:obj
        },()=>{
            console.log(this.state.item)
            Store.dispatch(actions.changeShopItem(this.state.item))
        })
        
    }

    changeNum(type){
        if(type=="+"){
            // console.log(this.state.num)
            let obj={...this.state.item,...{num:this.state.item.num+1}}
            console.log(obj)
            Store.dispatch(actions.changeShopItemNum(obj))
        }else{
            if(this.state.item.num>1){
                let obj={...this.state.item,...{num:this.state.item.num-1}}
                console.log(obj)
                Store.dispatch(actions.changeShopItemNum(obj))
            }
           
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            item:props.data

        })
    }   
    render() {
        return (
            <div className={Style.item}>
                <input type="checkbox" onChange={this.changeHandle.bind(this)} checked={this.state.item.state}/>
                <h3>{this.state.item.name}</h3>
                <span>价格：{this.state.item.price}</span>
                <section>
                    <button onClick={()=>this.changeNum("-")}>-</button>
                    <span>{this.state.item.num}</span>
                    <button onClick={()=>this.changeNum("+")}>+</button>
                </section>
            </div>
        )
    }
}
