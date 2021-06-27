import "./leftbar.css";
import {RssFeed,Chat,VideoCall,Group,Bookmark,QuestionAnswer,Work} from "@material-ui/icons";
import {Users} from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";

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
                      {Users.map(u=>(
                          <CloseFriends key={u.id} friend={u}/>
                      ))}
                    </ul>
                
            </div>
        </div>
    )
}
