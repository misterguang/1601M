import React, { Component } from 'react'

export default function(Com){
    return  class  extends Component {
        constructor(props){
            super(props)
            
            this.state={
                data:this.dataInit(props.order)
            }
        }
        componentWillReceiveProps(props){
            this.setState({
                data:this.dataInit(props.order)
            })
        }
        dataInit(item){
            var allCar=[]
            this.props.data[0].forEach((arr)=>{
                arr.forEach((carClass)=>{
                    allCar.push(...carClass.carList) 
                })
            })
            allCar=allCar.filter((i)=>{
                return i.price!=""
            })

            switch(item){
                case "max":{
                    allCar.sort((a,b)=>{
                        let aPrice=a.price.slice(0,3)
                        let bPrice=b.price.slice(0,3)
                       
                        return parseInt(bPrice)-parseInt(aPrice)
                    })
                } break
                case "min":{
                    allCar.sort((a,b)=>{
                        let aPrice=a.price.slice(0,3)
                        let bPrice=b.price.slice(0,3)
                       
                        return parseInt(aPrice)-parseInt(bPrice)
                    })
                } break
                default :{
                }
            }
            console.log(allCar)
            return allCar
           
            
        }
        render() {
            console.log(this.state.data)
            return <Com data={this.state.data}/>
        }
    }
    
}
