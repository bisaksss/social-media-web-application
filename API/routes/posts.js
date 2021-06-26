const router=require("express").Router();
const { findById } = require("../models/post");
const Post=require("../models/post");
const User = require("../models/User");

//create a post

router.post("/", async (req,res)=>{
    const newPost=new Post(req.body);
    try {
        const savePost=await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
});
//update post

router.put("/:id", async (req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Post updated");
    
        }else{
            res.status(403).json("You can only Update your posts");
        }
    } catch (error) {
        res.status(500).json(error);
    }
   
});

//delete a post

router.delete("/:id",async (req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post deleted");
    
        }else{
            res.status(403).json("You can only delete your posts");
        }
    } catch (error) {
        res.status(500).json(error);
    }
 
});
//like/dislike a post

router.put("/:id/like",async (req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("The post has been liked")
    
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("The post has been unliked");
    
        }
    } catch (error) {
        res.status(500).json(error);
    }
  
});



//get a post

router.get("/:id",async (req,res)=>{
    try {
        const post =await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }

});



//get timeline post

router.get("/timeline/all", async (req,res)=>{
    try {
        const currentUser=await User.findById(req.body.userId);
        const userPosts=await Post.find({userId:currentUser._id});
        const friendPosts=await Promise.all(
            currentUser.following.map((friendId)=>{
             return   Post.find({userId:friendId});
            })
        );
        res.json(userPosts.concat(...friendPosts))
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports=router;