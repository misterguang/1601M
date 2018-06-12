import React, { Component } from 'react'
import style from "../css/form"

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            formData:{
                name:"",
                password:"",
                sex:"",
                love:[],
                addr:"请选择",
                description:""
            },
            regData:{
                name:{
                    reg:/^[a-zA-Z]{6,12}$/,
                    msg:"请输入正确的用户名",
                    required:true,
                    state:false
                },
                password:{
                    reg:/^[a-zA-Z0-9]{6,16}$/,
                    msg:"请输入正确的密码",
                    required:true,
                    state:false
                },
                sex:{
                    reg:/\S/,
                    msg:"请选择性别",
                    required:true,
                    state:false
                },
                addr:{
                    reg:/\S/,
                    msg:"请选择城市",
                    required:true,
                    state:false
                },
                description:{
                    reg:/[\u4e00-\u9fa5]/,
                    msg:"请输入中文",
                    required:false,
                    state:true
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
                this.state.regData[e.target.name].state=false
                let el=document.createElement("p")
                el.setAttribute("class",style.show)
                el.innerHTML=this.state.regData[e.target.name].msg
                e.target.parentNode.appendChild(el)
            }else{
                this.state.regData[e.target.name].state=true
                clearnTip()
            }
           
        }
    //    清空提示信息
        let clearnTip=()=>{
            let $p=e.target.parentNode.getElementsByTagName("p")[0]
            console.log($p)
            if($p){
                e.target.parentNode.removeChild($p)
            }
        }
        // 判断是否为必填
        let testRequired=()=>{
            if(this.state.regData[e.target.name].required){
                this.state.regData[e.target.name].state=false
                let el=document.createElement("p")
                el.setAttribute("class",style.show)
                el.innerHTML="不能为空"
                e.target.parentNode.appendChild(el)
            }else{
                this.state.regData[e.target.name].state=true
            }
        }
        // 检测为不为空
        let testNull=()=>{
            clearnTip()
            
            if(this.state.formData[e.target.name]){
                regTestFn()
            }else{
                testRequired()
                
            }
        }
        testNull()
    }

    // 必填：校验
    // 是否为空：
    changeHandle(e){
        let obj=null
        switch(e.target.type){
            case "checkbox":{
                let love=[...this.state.formData.love]
                if(love.includes(e.target.value)){
                    love.splice(love.indexOf(e.target.value),1)
                    // console.log(love)
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
        // console.log(this.state.formData)
    }
    submit(){
        let {name,password,sex,addr,description}=this.state.regData
        if(name.state&&password.state&&sex.state&&addr.state&&description.state){
            alert("提交")
        }else{
            alert("请填写完整")
        }

        console.log(this.state.formData)
    }
    componentDidMount(){
        let $input=this.refs.form.getElementsByTagName("input")
        let $textarea=this.refs.form.getElementsByTagName("textarea")
        let $select=this.refs.form.getElementsByTagName("select")
        // $input.onchange=this.changeHandle
        let arrinput=[...$input]
        arrinput.forEach(i => {
            // console.log(i)
            i.onblur=this.testReg.bind(this)
        });
        let arrtextarea=[...$textarea]
        arrtextarea.forEach(i => {
            // console.log(i)
            i.onblur=this.testReg.bind(this)
        });
        let arrselect=[...$select]
        arrselect.forEach(i => {
            // console.log(i)
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
                            <option value="请选择">请选择</option>
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
