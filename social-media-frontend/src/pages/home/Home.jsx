//No need to import react in latest version
//import React from 'react'

import Navbar from "../../components/navBar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./home.css"

export default function Home() {
    return (
    <>
    <Navbar/> 
    <div className="homeContainer">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
        
    </div>

    </>
    )
}
