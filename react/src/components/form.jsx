import React, { Component } from 'react'
import style from "../css/form"

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            formData:{
                name:"zhangsan",
                password:"",
                sex:"",
                love:["足球"],
                addr:"南京",
                description:"天气真好"
            },
            regData:{
                name:{
                    reg:/^[a-zA-Z]{6,12}$/,
                    msg:"请输入正确的用户名",
                    required:true
                },
                password:{
                    reg:/^[a-zA-Z0-9]{6,16}$/,
                    msg:"请输入正确的密码",
                    required:true
                },
                sex:{
                    reg:/\S/,
                    msg:"请选择性别",
                    required:true
                },
                addr:{
                    reg:/\S/,
                    msg:"请选择城市",
                    required:true
                },
                description:{
                    reg:/^[\u4e00-\u9fa5]$/,
                    msg:"请输入中文",
                    required:false
                }
            }
        }
    }
    testReg(e){
        if(!this.state.regData[e.target.name]){
            return 
        }
        // 正则校验
        let regTestFn=()=>{
            let state=this.state.regData[e.target.name].reg.test(this.state.formData[e.target.name])
            // console.log(e.target.parentNode)
            if(!state){
                clearnTip()
                let el=document.createElement("p")
                el.setAttribute("class",style.show)
                el.innerHTML=this.state.regData[e.target.name].msg
                e.target.parentNode.appendChild(el)
            }else{
                clearnTip()
            }
           
        }
    //    清空提示信息
        let clearnTip=()=>{
            let $p=e.target.parentNode.getElementsByTagName("p")[0]
            if($p){
                e.target.parentNode.removeChild($p)
            }
        }
        // 判断是否为必填
        let testRequired=()=>{
            if(this.state.regData[e.target.name].required){
                regTestFn()
            }else{
                testNull()
            }
        }
        // 检测为不为空
        let testNull=()=>{
            if(this.state.formData[e.target.name]){
                regTestFn()
            }
        }
        testRequired()
        
       
    }

    changeHandle(e){
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
    componentDidMount(){
        let $input=this.refs.form.getElementsByTagName("input")
        let $textarea=this.refs.form.getElementsByTagName("textarea")
        let $select=this.refs.form.getElementsByTagName("select")
        // $input.onchange=this.changeHandle
        let arrinput=[...$input]
        arrinput.forEach(i => {
            console.log(i)
            i.onblur=this.testReg.bind(this)
        });
        let arrtextarea=[...$textarea]
        arrtextarea.forEach(i => {
            console.log(i)
            i.onblur=this.testReg.bind(this)
        });
        let arrselect=[...$select]
        arrselect.forEach(i => {
            console.log(i)
            i.onblur=this.testReg.bind(this)
        });

    }
    render() {
        return (
            <div>
                <h2>受控组件</h2>
                <ul ref="form">
                    <li>
                        <label htmlFor="">用户名：</label>
                        <input type="text" onChange={this.changeHandle.bind(this)} name="name" value={this.state.formData.name} />
                    </li>
                    <li>
                        <label htmlFor="">密码：</label>
                        <input type="password" onChange={this.changeHandle.bind(this)} name="password" value={this.state.formData.password} />
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
                        <label htmlFor="">城市选择：</label>
                        <select id="" name="addr" defaultValue={this.state.formData.addr} onChange={this.changeHandle.bind(this)}>
                            <option value="北京">北京</option>
                            <option value="南京">南京</option>
                            <option value="上海">上海</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">描述：</label>
                        <textarea  name="description" id="" cols="30" rows="10" onChange={this.changeHandle.bind(this)} defaultValue={this.state.formData.description}></textarea>
                    </li>
                    <li>
                        <button onClick={this.submit.bind(this)}>提交</button>
                    </li>
                </ul>
            </div>
        )
    }
}
