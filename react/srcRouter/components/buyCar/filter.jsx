import React, { Component } from 'react'
import hocBus from "../hoc/hocBus"
 class Filter extends Component {

    constructor(props){
        super(props)
    }
    priceHandle(item){
       console.log(this.props)
       this.props.history.push({pathname:"/buyCar/content",search: `?type=${item}`,
       state: { fromDashboard: true }
     })

     this.props.dispatch("showName","")
    }
    render() {
        return (
            <ul>
                <li onClick={()=>this.priceHandle("+")}>价格最高</li>
                <li onClick={()=>this.priceHandle("-")}>价格最低</li>
            </ul>
        )
    }
}


export default hocBus(Filter)