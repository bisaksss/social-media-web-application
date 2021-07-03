import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../onlinePersons/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Add} from "@material-ui/icons";

export default function Rightbar({user}) {
    const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
   // console.log(user);
    const {user:currentUser}=useContext(AuthContext);

    const HomeRightBar=()=>{
        return(
        <>

            <div className="birthdayContainer">
                <img src={`${publicFolder}cake.png`} alt="" className="birthdayImage" />
                <span className="birthdayText">
                <b>Bisak Sampath</b>  and <b>3 others friends </b>have a birthday today
                </span>
            </div>
                <img src={`${publicFolder}ads2.png`} alt="" className="adsImage" />
                <h5 className="rightbarTitle">Online friends</h5>
                <ul className="friendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
        </>
        );
       

    
    };
    const ProfileRightBar=()=>{
        const [friends,setFriends]=useState([]);
        const[followed,setFollowed]=useState(false);

        useEffect(()=>{
            currentUser.following.includes(user?.id)
        })

        useEffect(() => {
            const getFriends =async ()=>{
                try {
                    const friendList=await axios.get("/users/friends/"+user._id);
                    setFriends(friendList.data);
                } catch (error) {
                    console.log(error);
                }
            };
            getFriends();
        }, [user._id]);

        const handleClick=()=>{
            try {
                
            } catch (error) {
                console.log(error);
            }
        }
        return(
            <>
            {user.userName !== currentUser.userName && (
                <button className="rightBarFollow" onClick={handleClick}>
                    Follow<Add/>
                </button>
            )}
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">RelationShip:</span>
                    <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Marrid" :  "-" }</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                {friends.map((friend)=>(
                    <Link to={"/profile/"+friend.userName}>
                        
                    <div className="rightbarFollowing">
                       <img src={friend.profilePicture ? publicFolder+friend.profilePicture : publicFolder+"/propic/avatar.png"} alt="" className="rightbarFollowingImage" />
                       <span className="rightbarFollowingName">{friend.userName}</span>
                    </div>
                    </Link>
                ))}
              
             
           
            
               
            </div>
            </>
        );
    };





    return (
        <div className="rightBar">
            <div className="rightBarcontainer">
            
          {user ?  <ProfileRightBar/> :   <HomeRightBar/> } 
               
           
              
            </div>
        </div>
    )
}
