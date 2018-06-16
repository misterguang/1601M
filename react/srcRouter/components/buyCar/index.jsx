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

    constructor(props, contextTypes) {
        super(props, contextTypes)

        this.props.dispatch("carClass", this.props.data)
        this.props.dispatch("showCarList", this.initData())

        this.state = {
            showName: "",
            router: contextTypes.router
        }

        this.props.subScript(() => {
            // console.log(this.props.initState.showName)
            this.setState({
                showName: this.props.initState.showName
            })
        })
    }
    initData() {
        var allCar = []

        this.props.data[0].forEach((arr) => {
            arr.forEach((carClass) => {
                allCar.push(...carClass.carList)
            })
        })
        allCar = allCar.filter((i) => {
            return i.price != ""
        })
        return allCar
    }
    changeTab(item) {
        if (item == this.state.showName) {
            this.setState({
                showName: ""
            })
            this.state.router.history.push("/buyCar/content")
        } else {
            this.setState({
                showName: item
            })
            console.log(this.state.router)

            switch (item) {
                case "order": {
                    this.state.router.history.push("/buyCar/filter")
                } break;
                case "carType": {
                    this.state.router.history.push("/buyCar/carType")
                } break;
            }

        }

    }

    render() {
        return (
            <div>
                <ul className={Style.BuyCarTab}>
                    <li onClick={() => this.changeTab("order")} className={this.state.showName == "order" ? Style.checked : null}>
                        排序
                    </li>
                    <li onClick={() => this.changeTab("carType")} className={this.state.showName == "carType" ? Style.checked : null}>
                        品牌
                    </li>
                    <li>价格</li>
                    <li>筛选</li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default hocBus(hocGetData(BuyCar, [{ type: "get", url: "/api/carClass" }]), "carClass")
// export default BuyCar