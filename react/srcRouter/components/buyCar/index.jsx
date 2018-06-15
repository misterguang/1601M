import React, { Component } from 'react'
import Style from "../../css/buyCar.css"
import hocGetData from "../hoc/hocGetData"
import hocBus from "../hoc/hocBus"
 class BuyCar extends Component {
    constructor(props){
        super(props)
        console.log(props)
       
        // console.log(props.carClass)
    }
    componentDidMount(){
        this.props.dispatch("carClass",this.props.data)
    }
    render() {
        return (
            <div>
                <ul className={Style.BuyCarTab}>
                    <li>排序</li>
                    <li>品牌</li>
                    <li>价格</li>
                    <li>筛选</li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default hocBus(hocGetData(BuyCar,[{type:"get",url:"/api/carClass"}]),"carClass")