import React, { Component } from 'react'
import hocBus from "../hoc/hocBus"
class Filter extends Component {

    constructor(props) {
        super(props)
    }
    priceHandle(item) {
        console.log(this.props)

        //  this.props.history.push({pathname:"/buyCar/content",search: `?type=${item}`,
        //    state: { fromDashboard: true }
        //  })


        var allCar = []

        this.props.initState.carClass[0].forEach((arr) => {
            arr.forEach((carClass) => {
                allCar.push(...carClass.carList)
            })
        })
        allCar = allCar.filter((i) => {
            return i.price != ""
        })
        console.log(allCar)

        if (item == "+") {
            allCar.sort((a, b) => {

                return parseInt(b.price.slice(0, 4)) - parseInt(a.price.slice(0, 4))
            })
        } else if (item == "-") {
            allCar.sort((a, b) => {
                return parseInt(a.price.slice(0, 4)) - parseInt(b.price.slice(0, 4))
            })
        }


        this.props.dispatch("showCarList", allCar)
        this.props.dispatch("showName", "")
        this.props.history.push("/buyCar/content")
    }
    render() {
        return (
            <ul>
                <li onClick={() => this.priceHandle("+")}>价格最高</li>
                <li onClick={() => this.priceHandle("-")}>价格最低</li>
            </ul>
        )
    }
}


export default hocBus(Filter)