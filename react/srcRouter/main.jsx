import React from "react"
import ReactDom from "react-dom"
import App from "./components/app"
import Router from "./router/index"

ReactDom.render(
    <Router />
    ,document.getElementById("root"))