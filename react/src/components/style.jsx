import React, { Component } from 'react'
import Style1 from "../css/style"

const h3style={
    background:"red"
}

export default class Style extends Component {
    render() {
        return (
            <div>
                <h3 style={h3style}>这里是样式的讲解</h3>
                <p className={Style1.p1}>这里是挺好的一个页面</p>
            </div>
        )
    }
}
