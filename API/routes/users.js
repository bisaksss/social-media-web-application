const router=require("express").Router();
const User=require("../models/User");
const bcrypt=require("bcrypt");
const { findById } = require("../models/User");


//UpdateUser
router.put("/:id", async(req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
                if(req.body.password){
                    try {
                        const salt=await bcrypt.genSalt(10);
                        req.body.password=await bcrypt.hash(req.body.password,salt);
                    } catch (error) {
                        return res.status(500).json(error);
                    }
                }
                try {
                    const user = await User.findByIdAndUpdate(req.params.id,{
                        //its automatically set all imputs inside bosy
                        $set:req.body,
                    });
                    res.status(200).json("Account has been updated");
                } catch (error) {
                    return res.status(500).json(error);
                }
    }else{
        return  res.status(403).json("You can update only your account");
    }
    

});
//Delete User


router.delete("/:id", async(req,res)=>{
    if(req.body.userId===req.params.id || req.body.isAdmin){
          
                try {
                    const user = await User.findByIdAndDelete(req.params.id);
                    res.status(200).json("Account has been delete successfully");
                } catch (error) {
                    return res.status(500).json(error);
                }
    }else{
        return  res.status(403).json("You can delete only your account");
    }
    

});





//Get a user

router.get("/",async (req,res)=>{

    const userId=req.query.userId;
    const userName=req.query.userName;

    try {
        const user= userId 
        ? await User.findById(userId) 
        :  await User.findOne({userName:userName});
        const {password,updatedAt,...other}=user._doc;
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
        
    }
});




//Follow User

router.put("/:id/follow", async (req,res)=>{
    if(req.body.userId !=req.params.id){

        try {
            const user=await User.findById(req.params.id);
            const currentUser=await User.findById(req.body.userId);

                if(!user.followers.includes(req.body.userId)){
                    await user.updateOne({$push:{followers:req.body.userId}});
                    await currentUser.updateOne({$push:{following:req.params.id}});
                    res.status(200).json("User has been followed");

                }else{
                    res.status(403).json("You already follow this user")
                }

            } catch (error) {
                res.status(500).json(error);
            }
        
    }
    else{
        res.status(403).json("You can't follow your self");
    }
})


//UnFollow User



router.put("/:id/unfollow", async (req,res)=>{
    if(req.body.userId !=req.params.id){

        try {
            const user=await User.findById(req.params.id);
            const currentUser=await User.findById(req.body.userId);

                if(user.followers.includes(req.body.userId)){
                    await user.updateOne({$pull:{followers:req.body.userId}});
                    await currentUser.updateOne({$pull:{following:req.params.id}});
                    res.status(200).json("User has been unfollowed");

                }else{
                    res.status(403).json("You do not unfollow this user")
                }

            } catch (error) {
                res.status(500).json(error);
            }
        
    }
    else{
        res.status(403).json("You can't unfollow your self");
    }
})



module.exports=router;