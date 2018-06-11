import React, { Component } from 'react'
import Style from "../../css/alert.css"

export default class Dialog extends Component {
    constructor(props){
        super(props)
        this.state={
            show:{
                display:this.props.config.show?"block":"none"
            },
            config:this.props.config
        }
       
    }
    componentWillReceiveProps(newProps){
        this.setState({
            show:{
                display:newProps.config.show?"block":"none"
            },
            config:newProps.config
        })
    }
    sureHandle(){
        this.props.config.handle()
        if(this.props.config.type=="prompt"){
           
            this.props.config.sureCalback(this.refs.msg.value)
        }else{
            this.props.config.sureCalback("确定")
        }
    }
    noHandle(){
        this.props.config.handle()
        this.props.config.noCalback("取消")
    }
    render() {
        let el=null
        switch(this.props.config.type){
            case "alert":{
                el= <div className={Style.alert} style={this.state.show}>
                        <p>展示alert</p>
                        <section><button onClick={this.sureHandle.bind(this)}>确定</button> </section>
                    </div>
            } break;
            case "confirm":{
                el= <div className={Style.alert} style={this.state.show}>
                        <p>展示confirm</p>
                        <section>
                             <button onClick={this.noHandle.bind(this)}>取消</button> 
                            <button onClick={this.sureHandle.bind(this)}>确定</button> 
                        </section>
                    </div>
            } break;
            case "prompt":{
                el= <div className={Style.alert} style={this.state.show}>
                        <p>展示prompt</p>
                        <p><input type="text" ref="msg"/></p>
                        <section>
                             <button onClick={this.noHandle.bind(this)}>取消</button> 
                            <button onClick={this.sureHandle.bind(this)}>确定</button> 
                        </section>
                    </div>
            } break;
        }

        return el

    }
}
