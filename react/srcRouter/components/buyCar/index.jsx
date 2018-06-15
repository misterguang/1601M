import React, { Component } from 'react'
import Style from "../../css/buyCar.css"
import hocGetData from "../hoc/hocGetData"
import hocBus from "../hoc/hocBus"
import PropTypes from "prop-types"
import {
    Link
} from "react-router-dom"


 class BuyCar extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
      };
    
    constructor(props,contextTypes ){
        super(props,contextTypes)
        console.log(contextTypes)
        this.props.dispatch("carClass",this.props.data)
        this.state={
            showName:"",
            router:contextTypes.router
        }

        this.props.subScript(()=>{
            // console.log(this.props.initState.showName)
            this.setState({
                showName:this.props.initState.showName
            })
        })
    }
    changeTab(item){
        if(item==this.state.showName){
            this.setState({
                showName:""
            })
            this.state.router.history.push("/buyCar/content")
        }else{
            this.setState({
                showName:item
            })
            console.log(this.state.router)
            this.state.router.history.push("/buyCar/filter")
        }
       
    }

    render() { 
        return (
            <div>
                <ul className={Style.BuyCarTab}>
                    <li onClick={()=>this.changeTab("order")} className={this.state.showName=="order"?Style.checked:null}>
                        排序
                    </li>
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
// export default BuyCar