import "./leftbar.css";
import {RssFeed,Chat,VideoCall,Group,Bookmark,QuestionAnswer,Work} from "@material-ui/icons";

export default function Leftbar() {
    return (
        <div className="lefttBar">
            <div className="sideWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarItemText">Feed</span>
                    </li>
                    <li className="sidebarItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarItemText">Chat</span>
                    </li>
                    <li className="sidebarItem">
                        <VideoCall className="sidebarIcon"/>
                        <span className="sidebarItemText">VideoCall</span>
                    </li>
                    <li className="sidebarItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarItemText">Group</span>
                    </li>
                    <li className="sidebarItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarItemText">Bookmark</span>
                    </li>
                    <li className="sidebarItem">
                        <QuestionAnswer className="sidebarIcon"/>
                        <span className="sidebarItemText">QuestionAnswer</span>
                    </li>
                    <li className="sidebarItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarItemText">Work</span>
                    </li>
                   
                </ul>
                    <button className="sidebarButton">Show More</button>
                    <hr className="sidebarHR" />
                    <ul className="sidebarFriendList">
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                        <li className="sidebarFriendListItem">
                            <img src="/assets/propic2.jpg" alt="" className="sidebarImage" />
                            <span className="sidebarFriendName">Bisak Sampath</span>
                        </li>
                    </ul>
                
            </div>
        </div>
    )
}
