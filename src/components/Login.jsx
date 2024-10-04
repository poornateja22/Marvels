import React from "react";
import './Login.css';

const Login = () => {
    return(
        <div className="login">
            <h3>Login</h3>
            <form class="loginForm">
                <label htmlFor="username">Username:</label><br />
                <input type="text" id="username" name="username" placeholder="Enter your username" /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" placeholder="Enter your password" /><br /> 
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login