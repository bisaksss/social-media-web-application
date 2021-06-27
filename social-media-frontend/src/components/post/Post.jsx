import "./post.css"
import {MoreVert} from "@material-ui/icons"
import { Users } from "../../dummyData";

export default function Post(post) {
   
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/IMG_2198.jpg" alt="" className="postTopLeftImage" />
                        <span className="postTopLeftUserName">
                            Bisak Sampath
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
                    <img src={post.post.photo} alt="" className="postCenterImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="bottomLike" />
                        <img src="/assets/favourite.png" alt="" className="bottomLike" />
                        <span className="likeCounter">{post.post.like} People like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
