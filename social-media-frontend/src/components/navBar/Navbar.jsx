import "./navbar.css";
import {Search,Person,Chat,Notifications} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function navbar() {
    return (
        <div className="navbarContainer">
            <div className="topbarLeft" >
                <Link style={{textDecoration:"none"}} to="/">
                <span className="logo">BSB Social</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search Friend or Post" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarlink">Home</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                
                <img src="/assets/IMG_2198.jpg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}
