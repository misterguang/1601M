import React, { Component } from 'react'


import LifeRound from "./lifeRound/parent"
import Message from "./message/parent"
import Render from "./render"
import Style from "./style"
import Style2 from "./style2"
import Form from "./form"

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            age:20
        }

        setInterval(()=>{
            this.setState({
                age:this.state.age+1
            })
        },1000)
    }
    render(){


        return <ul>
            <li>
                {/* <LifeRound age={this.state.age}/> */}
                {/* <Message /> */}
                {/* <Render />   */}

                {/* <Style />
                <Style2 /> */}
                <Form />
            </li>
        </ul>
    }
}

export default App