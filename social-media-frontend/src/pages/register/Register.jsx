import "./register.css";

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BsB Social</h3>
                    <span className="loginDiscription">Welcome to BsB Social.Find Your Frends & Post your IDEA!</span>
                </div>
                <div className="logingRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder="UserName" />
                        <input type="email" className="loginInput" placeholder="Email" />
                        <input type="password" className="loginInput" placeholder="Password" />
                        <input type="password" className="loginInput" placeholder="Password Again" />
                        <button className="loginButoon">Sign Up</button>
                        <button className="loginregister">Log In to Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
