import "./online.css";

export default function Online({user}) {
    return (
        <li className="rightbarFriends">
        <div className="rigtbarProfileImageContainer">
            <img src={user.ProfilePicture} alt="" className="rightbarProfileImage" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.userName}</span>
    </li>
    )
}
