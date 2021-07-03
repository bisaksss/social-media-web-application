import "./profile.css";
import Navbar from "../../components/navBar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
    const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser]=useState({});
    
    const userName=useParams().userName;
   // console.log(userName);


    useEffect(()=>{
        const fetchUser=async ()=>{
            const res = await axios.get(`/users?userName=${userName}`);
            setUser(res.data);
        };
        fetchUser();

    },[userName]);
   // console.log(user);
    return (
        <>
            <Navbar/> 
        <div className="profile">
            <Leftbar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={user.profileCover ? publicFolder+user.profileCover : publicFolder+"cover/emtyCover.jpg"} alt="" className="coverImage" />
                        <img src={user.profilePicture ? publicFolder+user.profilePicture : publicFolder+"propic/avatar.png"} alt="" className="profileImage" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.userName}</h4>
                        
                        <span className="profileDiscription">{user.discription}</span>

                    </div>
                    
                </div>
                <div className="profileRightBottom">
                <Feed userName={userName}/>
                <Rightbar user={user}/>
                </div>
            </div>

           
         
            
        </div>
    
        </>
    )
}
