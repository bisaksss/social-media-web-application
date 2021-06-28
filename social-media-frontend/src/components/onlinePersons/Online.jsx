import "./online.css";

export default function Online({user}) {
    const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="rightbarFriends">
        <div className="rigtbarProfileImageContainer">
            <img src={publicFolder+user.ProfilePicture} alt="" className="rightbarProfileImage" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.userName}</span>
    </li>
    )
}
