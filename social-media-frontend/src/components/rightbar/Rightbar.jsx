import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../onlinePersons/Online";

export default function Rightbar({user}) {
    const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
   // console.log(user);
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
        return(
            <>
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
                <div className="rightbarFollowing">
                    <img src={`${publicFolder}propic2.jpg`} alt="" className="rightbarFollowingImage" />
                    <span className="rightbarFollowingName">Hashini Nishika</span>
                </div>
           
            
               
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
