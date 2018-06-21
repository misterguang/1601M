import React, { Component } from 'react'
import axios from "axios"
import Item from "./item"
import Style from "../../css/shopping"
import Store,{actions} from "../../store"

 class List extends Component {
     constructor(props){
         super(props)
         this.state={
             data:Store.getState().shoppingList,
             allState:this.initAllTest()
         }
         Store.subscribe(()=>{
             this.subscribeHandle()
         })
     }
    componentDidMount(){
        axios.get("/api/shopClass").then((data)=>{
            Store.dispatch(actions.changeShopList(data.data))
        })
    }
    subscribeHandle(){
        this.setState({
            data:Store.getState().shoppingList,
            allState:this.initAllTest()
        })
    }
    initAllTest(){
        let allState=Store.getState().shoppingList.every((i)=>{
            return i.state
        })
        return allState
    }
    checkedAll(){
       if(!this.state.allState){
            Store.dispatch(actions.changeShopItemState(true))
       }else{
        Store.dispatch(actions.changeShopItemState(false))
       }
    }
    render() {
        let el=this.state.data.map((i)=>{
            console.log(i.num)
            return <Item data={i} key={i.id}/>
        })
        return (
            <div>
                <h3 className={Style.allSelect}>
                    全选：
                    <input type="checkbox" onChange={this.checkedAll.bind(this)} checked={this.state.allState}/>
                </h3>
                {el}
            </div>
        )
    }
}
export default List