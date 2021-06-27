import "./closeFriends.css"

export default function CloseFriends({friend}) {
    return (
        <li className="sidebarFriendListItem">
            <img src={friend.ProfilePicture} alt="" className="sidebarImage" />
            <span className="sidebarFriendName">{friend.userName}</span>
        </li>
    )
}
