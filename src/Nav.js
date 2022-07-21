import React from "react"
import {NavLink} from "react-router-dom"
import "./App.css"


export default function Nav(){
    return(
        <nav>
            <div className="nav-left">
                <h1>LogO</h1>
            </div>
            <div className="nav-right">
                <ul>
                    <li><NavLink to = "home" style={({isActive})=>isActive ? {color : "red"} : null}>Home</NavLink></li>
                    <li><NavLink to = "service" style={({isActive})=>isActive ? {color : "red"} : null}>Service</NavLink></li>
                    <li><NavLink to = "product" style={({isActive})=>isActive ? {color : "red"} : null}>Product</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}