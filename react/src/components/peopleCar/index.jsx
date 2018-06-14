import React, { Component } from 'react'
import PageList from "./pageList"
import Style from "./index.css"
import hocGetData from "../hoc/hocGetData"

class Peoplecar extends Component {
    constructor(props){
        super(props)
        this.state={
            order:""
        }
    }
    changeOrder(item){
        this.setState({
            order:item
        })
    }
    render() {
        console.log(this.state.order)
        return (
            <div>
                <ul className={Style.tab}>
                    <li onClick={()=>this.changeOrder("max")}>价格最高</li>
                    <li onClick={()=>this.changeOrder("min")}>价格最低</li>
                </ul>    
                 <PageList {...this.props} order={this.state.order}/>
             </div>
        )
    }
}


export default hocGetData(Peoplecar,[{type:"get",url:"/api/carClass"}])
