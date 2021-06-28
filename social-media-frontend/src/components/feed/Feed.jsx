import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
//import { Posts } from "../../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Feed() {
    const [posts,setPosts]=useState([]);
    useEffect( ()=>{

        const fetchPost=async ()=>{
            const res= await axios.get("posts/timeline/60d4c5c188a22604ec3e2a2e");
            setPosts(res.data);
        }
       
       fetchPost();
    },[])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p)=>(
                     <Post key={p._id} post={p}/>
                ))}
               
            
            </div>
        </div>
    )
}
