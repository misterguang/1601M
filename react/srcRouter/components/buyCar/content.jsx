import React, { Component } from 'react'
import hocBus from "../hoc/hocBus"

import Style from "../../css/buyCar.css"
 class Content extends Component {
    constructor(props){
        super(props)
        
        // function getQueryString(str,name) {  
        //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");  
        //     var r = str.substr(1).match(reg);  
        //     if (r != null) return unescape(decodeURI(r[2])); return null;  
        // }  
        // this.state={
        //     data:this.dataHandle(props.initState.carClass[0],getQueryString(props.location.search,"type"))
        // }
        console.log(this.props.initState.showCarList)
        this.state={
            data:this.props.initState.showCarList
        }

    }
    // dataHandle(data,type){
    //     console.log(type)
    //     var allCar=[]
       
    //      data.forEach((arr)=>{
    //         arr.forEach((carClass)=>{
    //             allCar.push(...carClass.carList) 
    //         })
    //     })
    //     allCar=allCar.filter((i)=>{
    //         return i.price!=""
    //     })
    //     console.log(allCar)

    //     if(type=="+"){
    //         allCar.sort((a,b)=>{
               
    //             return parseInt(b.price.slice(0,4))-parseInt(a.price.slice(0,4))
    //         })
    //     }else if(type=="-"){
    //         allCar.sort((a,b)=>{
    //             return parseInt(a.price.slice(0,4))-parseInt(b.price.slice(0,4))
    //         })
    //     }
    //     return allCar

    // }

    render() {
        // console.log(this.props.data)
        let el=this.state.data.map((i,index)=>{
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
export default hocBus(Content)