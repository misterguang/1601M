import React, { Component } from 'react'
import {
    NavLink,
} from "react-router-dom"

import Style from "./index.css"

var style={
    background:"red"
}
export default class Navl extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    changeHandle(e){
        console.log(e)
    }
    render() {
        return (
            <div>
                <NavLink to={`/navLink/a`} activeStyle={style} activeClassName={Style.select} isActive={()=>this.changeHandle("a")}>a页面</NavLink>
                <NavLink to={`/navLink/b`} activeStyle={style} activeClassName={Style.select} isActive={()=>this.changeHandle("a")}>b页面</NavLink>
                <NavLink to={`/navLink/c`} activeStyle={style} activeClassName={Style.select} isActive={()=>this.changeHandle("a")}>c页面</NavLink>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
