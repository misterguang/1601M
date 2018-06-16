import React, { Component } from 'react'
import hocBus from "../hoc/hocBus"

class CarClass extends Component {
    constructor(props){
        super(props)
      
        this.state={
            carType:this.dataHandle()
        }
        
    }

    dataHandle(){
        let arr=[]
        this.props.initState.carClass[0].forEach(i => {
            i.forEach(j => {
                arr.push(j)
            });
        });
        return arr
        console.log(arr)
    }
    clickHandle(item){
        console.log(item.carList)
        let arr=item.carList.filter((i)=>{
            return i.price!=""
        })
        this.props.dispatch("showCarList",arr)

        this.props.history.push("/buyCar/content")
        
    }

    render() {
        let $el=this.state.carType.map((i,index)=>{
            return <li key={index} onClick={()=>this.clickHandle(i)}>{i.carClass}</li>
        })

        return (
            <ul>
                {$el}
            </ul>
        )
    }
}
export default hocBus(CarClass)