const express =require("express");
const app=express();

const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");
const postRoute=require("./routes/posts");

//use to get files from API 
const path=require("path");


//for image upload in share
const multer=require("multer");

dotenv.config();


mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex:true,
    useNewUrlParser: true, 
    useUnifiedTopology: true
},()=>{
    console.log("Connected to Database");
});

app.use("/postImage",express.static(path.join(__dirname,"public/postImage")) );

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/postImage");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});

const upload=multer({storage});//we have to write path here
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try {
        
        return res.status(200).json("File Uploaded successfully");//no need to write anything, Because upload.single("file") do action
        
    } catch (error) {
        console.log(error);
    }
})

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.listen(8800,()=>{
    console.log("Backend server is runing");
});