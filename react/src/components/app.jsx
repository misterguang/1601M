import React, { Component } from 'react'


import LifeRound from "./lifeRound/parent"
import Message from "./message/parent"
import Message1 from "./message1/parent"
import Messageevent from "./messageEvent/parent"
import Render from "./render"
import Style from "./style"
import Style2 from "./style2"
import Form from "./form"
import Popuproot from "./popupRoot/popupRoot"

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            age:20
        }

        // setInterval(()=>{
        //     this.setState({
        //         age:this.state.age+1
        //     })
        // },1000)
    }
    render(){


        return <ul>
            <li>
                {/* <LifeRound age={this.state.age}/> */}
                {/* <Message /> */}
                {/* <Message1 /> */}
                <Messageevent />
                {/* <Render />   */}

                {/* <Style />
                <Style2 /> */}
                {/* <Form /> */}

                {/* <Popuproot /> */}
            </li>
        </ul>
    }
}

export default App