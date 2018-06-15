import React, { Component } from 'react'
import hocBus from "../hoc/hocBus"

import Style from "../../css/buyCar.css"
 class Content extends Component {
    constructor(props){
        super(props)
        console.log(props)

    }
    componentWillReceiveProps(props){
        console.log(props)
    }

    render() {
        // console.log(this.props.data)
        // let el=this.props.data.map((i,index)=>{
        //     return  <li key={index}>
        //                 <h4>{i.carName}</h4>
        //                 <p>{i.price}</p>
        //             </li>  
        // })

        return (
            <ul className={Style.list}>
               {/* {el}  */}
            </ul>
        )
    }
}


export default Content