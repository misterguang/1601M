import React, { Component } from 'react'
import {
    Route
} from "react-router-dom"

import List from "./list"
import Allcount from "./allCount"

class Shopping extends Component {
    render() {
        return (
            <div>
                
                <List />
                <Allcount />
            </div>
        )
    }
}


export default ()=><Route path="/shopping" component={Shopping}/>