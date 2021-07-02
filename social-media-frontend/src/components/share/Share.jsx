import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef ,useState} from "react";
import axios from "axios";

export default function Share() {
    const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
    const {user}=useContext(AuthContext);
    const discription=useRef();
    const [file,setFile]= useState(null);
    const submitShare= async (e)=>{
        e.preventDefault();

        const newPost={
            userId:user._id,
            discription:discription.current.value
        }
        try {
            await axios.post("/posts/",newPost)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="shareContainer">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? publicFolder+user.profilePicture : publicFolder+"propic/avatar.png"} alt="" className="shareTopImage" />
                    <input placeholder={`Whats going on ${user.userName} ?`} className="shareInput" ref={discription}/>
                </div>
                    <hr className="shareHR" />
                <form className="shareBottom" onSubmit={submitShare}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>{setFile(e.target.files[0])}}/>
                        </label>
                        <div className="shareOption">
                            <Label  htmlColor="gray" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room  htmlColor="red" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions  htmlColor="orange" className="shareIcon"/>
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}
