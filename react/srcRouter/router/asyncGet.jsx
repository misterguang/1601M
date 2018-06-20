import React, { Component } from 'react'

export default function(requireHandle){
    return class extends Component {
        constructor(props){
            super(props)
            this.state={
                Com:null
            }
            requireHandle().then((Com)=>{
                console.log(Com)
                this.setState({
                    Com:Com.default
                })
            })
        }
        render() {
            let {Com}=this.state
            let el=Com?<Com {...this.props}/>:null
            return el
        }
    }
}

