import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            formData:{
                name:"zhangsan",
                password:"",
                sex:0,
                love:["足球"]
            }
          
        }
    }
    changeHandle(e){
        console.log(e.target.data)
        let obj=null
        switch(e.target.type){
            case "checkbox":{
                let love=[...this.state.formData.love]
               
                if(love.includes(e.target.value)){
                    love.splice(love.indexOf(e.target.value),1)
                    console.log(love)
                }else{
                    love.push(e.target.value)
                }
              
                obj={ 
                    [e.target.name]:love
                }
                console.log(obj)
            } break
            default :{
               obj={
                    [e.target.name]:e.target.value
                }
            }
        }

        this.setState({
            formData:Object.assign(this.state.formData,obj)
        })
        console.log(this.state.formData)
    }
    submit(){
        console.log(this.state.formData)
    }
    render() {
        return (
            <div>
                <h2>受控组件</h2>
                <ul>
                    <li>
                        <label htmlFor="">用户名：</label>
                        <input type="text" onChange={this.changeHandle.bind(this)} name="name" value={this.state.formData.name}/>
                    </li>
                    <li>
                        <label htmlFor="">密码：</label>
                        <input type="password" onChange={this.changeHandle.bind(this)} name="password" value={this.state.formData.password}/>
                    </li>
                    <li>
                        <label htmlFor="">性别：</label>
                        男：
                        <input type="radio" onChange={this.changeHandle.bind(this)} name="sex" value="0" checked={this.state.formData.sex=="0"}/>
                        女：
                        <input type="radio" onChange={this.changeHandle.bind(this)} name="sex" value="1" checked={this.state.formData.sex=="1"}/>
                    </li>
                    <li>
                        <label htmlFor="">爱好：</label>
                        篮球
                        <input type="checkbox" onChange={this.changeHandle.bind(this)} name="love" value="篮球"  checked={this.state.formData.love.includes("篮球")}/>
                        ；足球
                        <input type="checkbox" onChange={this.changeHandle.bind(this)} name="love" value="足球" checked={this.state.formData.love.includes("足球")}/>
                        ；乒乓球
                        <input type="checkbox" onChange={this.changeHandle.bind(this)} name="love" value="乒乓球" checked={this.state.formData.love.includes("乒乓球")}/>
                    </li>
                    <li>
                        <button onClick={this.submit.bind(this)}>提交</button>
                    </li>
                </ul>
            </div>
        )
    }
}
