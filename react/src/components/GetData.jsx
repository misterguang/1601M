import React, { Component } from 'react'
import axios from "axios"
import Hocgetdata from "./hoc/hocGetData"

class Getdata extends Component {

    constructor(props){
        super(props)
        console.log(props.data)
        this.state={
            data:props.data
        }
        // axios.get("/api/hocGetData").then((data)=>{
        //     this.setState({
        //         data:data
        //     })
        // })
    }
    render() {
        return (
            <div>
                <h2>hoc获取数据</h2>
                <p>{this.state.data.obj.name}</p>
            </div>
        )
    }
}


export default Hocgetdata(Getdata,{type:"get",url:"/api/hocGetData"})