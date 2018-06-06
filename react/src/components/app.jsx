import React, { Component } from 'react'


import LifeRound from "./lifeRound/parent"
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
                <LifeRound age={this.state.age}/>
            </li>
        </ul>
    }
}

export default App