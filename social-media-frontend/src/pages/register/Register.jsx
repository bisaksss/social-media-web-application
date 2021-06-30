import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
    const username=useRef();
    const email=useRef();
    const password=useRef();
    const passwordAgain=useRef();
    
    const history=useHistory();

    const saveUser=async (e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Password not match!!!!");
        }else{
            const user= {
                userName:username.current.value,
                email:email.current.value,
                password:password.current.value,

            }
            try {
                const res=await axios.post("auth/register",user);
                history.push("/login");
            } catch (error) {
                console.log(error);
            }
           
        }    
        
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BsB Social</h3>
                    <span className="loginDiscription">Welcome to BsB Social.Find Your Frends & Post your IDEA!</span>
                </div>
                <div className="logingRight">
                    <form onSubmit={saveUser} className="loginBox">
                        <input type="text" className="loginInput" placeholder="UserName" ref={username}/>
                        <input type="email" className="loginInput" placeholder="Email" ref={email}/>
                        <input type="password" className="loginInput" placeholder="Password" min="6" ref={password}/>
                        <input type="password" className="loginInput" placeholder="Password Again" ref={passwordAgain} />
                        <button className="loginButoon" type="submit">Sign Up</button>
                        <button className="loginregister">Log In to Account</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
