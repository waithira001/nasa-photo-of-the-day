import React from "react";
import body from "./body"
import styled from "styled-components";


function Navbar(){
    return(
        <div className ="container">
            <div className="nav">
            <h1>NASA</h1>
            <div className="nav-item">
                <a href= "#">Home</a>
                <a href= "#">About</a>
                <a href= "#">Shop</a>
                <a href= "#">Contact</a>
            </div>
            </div>
        </div>
    )
}
export default Navbar; 