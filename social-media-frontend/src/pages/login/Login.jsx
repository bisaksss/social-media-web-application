import { useRef } from "react";
import "./login.css";

export default function Login() {
   const email = useRef();
   const password = useRef();

    const handleClick=(e)=>{
        e.preventDefault();//not refreash page
        console.log(email.current.value);
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BsB Social</h3>
                    <span className="loginDiscription">Welcome to BsB Social.Find Your Frends & Post your IDEA!</span>
                </div>
                <div className="logingRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input type="email" className="loginInput" placeholder="Email" ref={email}/>
                        <input type="password" className="loginInput" placeholder="Password" ref={password} required minLength="6"/>
                        <button className="loginButoon">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginregister">Create account</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
