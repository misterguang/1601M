import React, { Component } from 'react'


let btnaudio={
    display:"block !important",
    margin: "90px auto",
    width: "1.86px",
    height: "1.86px",
    background:"green",
}
export default class Audio extends Component {
    constructor(props){
        super(props)
        this.state={
            text:"暂停",
            control:true

        }
    }
    controlHandle(){
        console.log(this.refs.audioTab.duration)
        this.refs.audioTab.pause()
        if(this.state.control){
            this.setState({
                text:"播放",
                control:false
            })
            this.refs.audioTab.pause()
        }else{
            this.setState({
                text:"暂停",
                control:true
            })
            this.refs.audioTab.play()
        }
        
    }
    render() {
        return (
            <div>
                <button onClick={this.controlHandle.bind(this)}>{this.state.text}</button>
                <div>
                <audio style={btnaudio}  controls="controls"  autoPlay="autoplay" ref="audioTab" src="http://sc1.111ttt.cn:8282/2018/1/03m/13/396131232171.m4a?tflag=1519095601&pin=6cd414115fdb9a950d827487b16b5f97#.mp3"></audio>
                </div>
              
            </div>
        )
    }
}
