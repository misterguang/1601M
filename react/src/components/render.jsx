import React, { Component } from 'react'

export default class Render extends Component {
    constructor(props){
        super(props)
        this.state={
            stateT:false,
            list:[1,2,3,4,5,6]
        }
        this.changeFn=this.changeFn.bind(this)
    }
    changeFn(){
        this.setState({
            stateT:!this.state.stateT
            
        })
    }
    render() {
        // if与else的判断
        // var element=null
        //     if(this.state.stateT){
        //         element= <div> stateT为true时 </div>
        //     }else{
        //             element= <div> stateT为false时 </div>
        //     }
        // return (
        //     <div>
        //         <button onClick={this.changeFn}>切换</button>
        //         {element}
        //     </div> 
        // )

        // 使用逻辑&&进行判断

        // return (
        //     <div>
        //         <button onClick={this.changeFn}>切换</button>
        //         {this.state.stateT&&<div>这是为true</div>}
        //     </div>
        // )
        // 三目运算符
        // return (
        //     <div>
        //         <button onClick={this.changeFn}>切换</button>
        //         {this.state.stateT?<div>这是为true</div>:<div>这是为false</div>}
        //     </div>
        // )


        let el=this.state.list.map((i,index)=>{
            return <li key={index}>{i}</li>
        })
        
        return <ul>
            {el}
        </ul>

    }
}
