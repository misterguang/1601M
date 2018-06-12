
var bus={
    data:{
        msg:""
    },
    cbArr:{},
    $on(event,cb){
        if(!this.cbArr.hasOwnProperty(event)){
            this.cbArr[event]=[cb]
        }else{
            this.cbArr[event].push(cb)
        }
    },
    $emit(event,attr,...data){
        if(this.data.hasOwnProperty(attr)){
            console.log(data[0])
            this.data[attr]=data[0]
        }
        if(!this.cbArr[event]){
            return 
        }
       
        this.cbArr[event].forEach((i)=>{
            i(...data)
        })
    },
    destroyed(event){
        delete this.cbArr[event] 
    }   
}

export default bus

// bus.$on("up",(data1,data2,data3)=>{
//     console.log(data1,data2,data3)
// })

// bus.$on("up",(data1,data2,data3)=>{
//     console.log(data1,data2,data3)
// })

// bus.$on("down",(data)=>{
//     console.log(data)
// })

// bus.destroyed("up")

// bus.$emit("up",123,"beijing","nanjing")


// bus.$emit("down",456)
