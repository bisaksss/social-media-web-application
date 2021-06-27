import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post() {
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
                            2 mins ago
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postTa">Its my first post</span>
                    <img src="/assets/post.jpg" alt="" className="postCenterImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="bottomLike" />
                        <img src="/assets/favourite.png" alt="" className="bottomLike" />
                        <span className="likeCounter">50 People like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">10 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
