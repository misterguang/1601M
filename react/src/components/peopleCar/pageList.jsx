import React, { Component } from 'react'
import hocDataInit from "./hoc/hocDataInit.jsx"
import Style from "./index.css"
 class Pagelist extends Component {
    render() {
        // console.log(this.props.data)
        let el=this.props.data.map((i,index)=>{
            return  <li key={index}>
                        <h4>{i.carName}</h4>
                        <p>{i.price}</p>
                    </li>  
        })

        return (
            <ul className={Style.list}>
               {el} 
            </ul>
        )
    }
}


export default hocDataInit(Pagelist)