import "./profile.css";
import Navbar from "../../components/navBar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
    return (
        <>
            <Navbar/> 
        <div className="profile">
            <Leftbar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/CoverImage/cover_bisak.jpg" alt="" className="coverImage" />
                        <img src="/assets/IMG_2198.jpg" alt="" className="profileImage" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Bisak Sampath</h4>
                        
                        <span className="profileDiscription">Hello world I'm Bisak Sampath</span>

                    </div>
                    
                </div>
                <div className="profileRightBottom">
                <Feed/>
                <Rightbar profilezz/>
                </div>
            </div>

           
         
            
        </div>
    
        </>
    )
}
