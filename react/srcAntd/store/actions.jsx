import {
    SETUSERID,
    LOGIN
} from "./types"

import axios from "axios"

export default {
    [SETUSERID](item){
        return {
            type:SETUSERID,
            text:item
        }
    },
     [LOGIN](item,that){
        //  console.log(item)
        //  let formData = new FormData();
        //  Object.keys(item).forEach((i)=>{
        //     formData.append(i,item[i]);
        //  })
        console.log(that)
        return (dispatch)=>{
            axios.post("/api/login",item).then((data)=>{
                console.log(data.data)
                dispatch(this[SETUSERID](data.data))
                that.props.history.push("/index")
            })

            // fetch("/api/login",{
            //     method: 'POST',
            //     body: formData, // data can be `string` or {object}!
            //     headers: {
            //         　　　　 'Accept': 'application/json',
            //         　　　　 'Content-Type': 'application/x-www-form-urlencoded',
            //       　　　　 },
            // }).then((res)=>{
            //     return res.json()
            // }).then((data)=>{
            //     console.log(data)
            //     dispatch(this[SETUSERID](data.data))
            // })
        }
    }
}