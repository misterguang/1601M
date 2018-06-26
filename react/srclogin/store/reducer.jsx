import {
    SETUSERID,
   
} from "./types"

let Initstate={
    userId:null
}

export default (state = Initstate, action) => {

    let {type,text}=action
    switch (type) {
        case SETUSERID:{
            let obj={...state,...{userId:text.data}}
            console.log(obj)
            return obj
        }
        default:
            return state
    }
}