import React, { Component } from 'react'
import Style from "../css/app"
import hocBus from "./hoc/hocBus"

 class App extends Component {
    render() {
        return (
            <div className={Style.app}>
    
                {this.props.children}

            </div>
        )
    }
}

export default App