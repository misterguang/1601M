import React, { Component } from 'react'
import Style from "../css/pupop"

export default class Pupop extends Component {
    render() {
        return (
            <div className={Style.pupop}>
                <div>
                   {this.props.msg}                 
                </div>
                <footer>
                    <button onClick={this.props.cbOk}>确定</button>
                    <button onClick={this.props.cbErr}>取消</button>
                </footer>
            </div>
        )
    }
}
