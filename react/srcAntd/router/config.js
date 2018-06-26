import Index from "../components/index"
import React from "react"

import A from "../components/com/a"
import AA from "../components/com/b"
import AAA from "../components/com/c"



var config=[
    {
        path:"/index",
        name:"index",
        commponent:Index,
    },
    {
        path:"/a",
        name:"a",
        commponent:A,
        children:[
            {
                path:"/a/aa",
                name:"aa",
                commponent:AA,
                children:[{
                    path:"/a/aa/aaa",
                    name:"aaa",
                    commponent:AAA
                }]
            }
        ]
    }
]


export default config