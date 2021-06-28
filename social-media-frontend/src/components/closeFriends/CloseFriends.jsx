import "./closeFriends.css"

export default function CloseFriends({friend}) {
    
   const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriendListItem">
            <img src={publicFolder+friend.ProfilePicture} alt="" className="sidebarImage" />
            <span className="sidebarFriendName">{friend.userName}</span>
        </li>
    )
}
