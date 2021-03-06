import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
//import { Posts } from "../../dummyData";
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({userName}) {
    const {user}=useContext(AuthContext);
    const [posts,setPosts]=useState([]);
    useEffect( ()=>{

        const fetchPost=async ()=>{
            const res= userName ? 
               await axios.get("/posts/profile/"+userName)
             : await axios.get("/posts/timeline/"+user._id);
            setPosts(res.data.sort((post1,post2)=>{
                return new Date(post2.createdAt) - new Date(post1.createdAt);//sort post using createdAt
            }));
        }
       
       fetchPost();
    },[userName,user._id])
    return (
        <div className="feed">
            <div className="feedWrapper">
                {(! userName || userName === user.userName) &&  <Share/>}
                {posts.map((p)=>(
                     <Post key={p._id} post={p}/>
                ))}
               
            
            </div>
        </div>
    )
}
