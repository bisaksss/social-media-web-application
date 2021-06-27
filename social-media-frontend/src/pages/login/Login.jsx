import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BsB Social</h3>
                    <span className="loginDiscription">Welcome to BsB Social.Find Your Frends & Post your IDEA!</span>
                </div>
                <div className="logingRight">
                    <div className="loginBox">
                        <input type="email" className="loginInput" value="Email" />
                        <input type="password" className="loginInput" value="Password"  />
                        <button className="loginButoon">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginregister">Create account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
