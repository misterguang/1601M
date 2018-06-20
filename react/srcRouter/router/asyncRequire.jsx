import React, { Component } from 'react'

export default function(requireHandle){
    return class extends Component {
        constructor(props){
            super(props)
            this.state={
                Com:null
            }
            // require.ensure([], (require)=> {
            //     var c = requireHandle().default;
            //    console.log(c)
            //     this.setState({
            //         Com:c
            //     })
            // });
        }
        componentWillMount(){
            new Promise((resolve,reject)=>{
              require.ensure([], function(require) {
                var c = requireHandle().default;
                console.log(c)
                resolve(c)
              });
            }).then((data)=>{
              this.setState({
                Com:data
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
