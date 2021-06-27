import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../onlinePersons/Online";

export default function Rightbar() {
    return (
        <div className="rightBar">
            <div className="rightBarcontainer">
                <div className="birthdayContainer">
                    <img src="/assets/cake.png" alt="" className="birthdayImage" />
                    <span className="birthdayText">
                       <b>Bisak Sampath</b>  and <b>3 others friends </b>have a birthday today
                    </span>
                </div>
                <img src="/assets/ads2.png" alt="" className="adsImage" />
                <h5 className="rightbarTitle">Online friends</h5>
                <ul className="friendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
   
                
            </div>
        </div>
    )
}
