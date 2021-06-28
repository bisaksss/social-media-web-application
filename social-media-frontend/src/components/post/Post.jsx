import "./post.css"
import {MoreVert} from "@material-ui/icons"
//import { Users } from "../../dummyData";
import { useEffect,useState } from "react";
import axios from "axios";
import {format} from "timeago.js";

export default function Post(post) {
   //const user=Users.filter((u)=>(u.id===1));
   //console.log(user[0].userName);
   console.log(post);
  
   const [like,setLike]= useState(post.post.likes.length);
   const [liked,setLiked]= useState(false);
   const [user,setUser]=useState({});
   console.log(user);


   const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
   useEffect( ()=>{

    const fetchUser=async ()=>{
        const res= await axios.get(`/users/${post.post.userId}`);
        setUser(res.data);
    }
   
   fetchUser();
},[post.post.userId])




    const likeHandeler = () =>{
        setLike(liked ? like-1 : like +1);
        setLiked(!liked);
    };
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture || publicFolder+"/propic/avatar.png"} alt="" className="postTopLeftImage" />
                        <span className="postTopLeftUserName">
                            {user.userName}
                        </span>
                        <span className="postTopLeftTime">
                            {format(post.post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postTa">{post.post?.discription}</span>
                    <img src={publicFolder+post.post.image} alt="" className="postCenterImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                       { /*<img src="/assets/like.png" alt="" className="bottomLike" onClick={likeHandeler}/>*/}
                        <img src={`${publicFolder}favourite.png`} alt="" className="bottomLike" onClick={likeHandeler}/>
                        <span className="likeCounter">{like} People like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
