import React, { Component } from 'react'
// import axios from "axios"

export default function (Com,config) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state={
                Com:null,
                data:null
            }
        }
        componentWillMount() {
            // alert(22)
            this.ajax(config).then((data)=>{
                // console.log(data)
                this.setState({
                    Com:Com,
                    data:JSON.parse(data)
                })
            })
        }

        ajax({ type, url, data }) {
            return new Promise((resolve, reject) => {
                var xhr = new XMLHttpRequest()
                console.log(type,url)
                if (type == "get") {
                    xhr.open(type,url)
                    xhr.send()
                } else {
                    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                    xhr.open(type,url)
                    xhr.send(data)
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                           
                            resolve(xhr.responseText)
                        } else {
                            reject(xhr.status)
                        }
                    } 
                }
            })
        }
        render() {
            let el=this.state.Com?<Com data={this.state.data}/>:null
            return el
        }
    }

}