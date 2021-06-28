import "./post.css"
import {MoreVert} from "@material-ui/icons"
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post(post) {
   //const user=Users.filter((u)=>(u.id===1));
   //console.log(user[0].userName);
   const [like,setLike]= useState(post.post.like);
   const [liked,setLiked]= useState(false);

   const publicFolder=process.env.REACT_APP_PUBLIC_FOLDER;
    const likeHandeler = () =>{
        setLike(liked ? like-1 : like +1);
        setLiked(!liked);
    };
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>(u.id===post.post.userId))[0].ProfilePicture} alt="" className="postTopLeftImage" />
                        <span className="postTopLeftUserName">
                            {Users.filter((u)=>(u.id===post.post.userId))[0].userName}
                        </span>
                        <span className="postTopLeftTime">
                            {post.post.date}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postTa">{post.post?.description}</span>
                    <img src={publicFolder+post.post.photo} alt="" className="postCenterImage" />
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
