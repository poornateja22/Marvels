import React from "react";
import './Signup.css';

const Signup = () => {
    return(
        <div className="signUp">
            <h3>Sign Up</h3>
            <form class="signUpForm">
                <label htmlFor="username">Email:</label><br />
                <input type="text" id="username" name="username" placeholder="Enter your username" /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" placeholder="Enter your password" /><br /> 
                <label htmlFor="password">Confirm Password:</label><br />
                <input type="password" id="password" name="password" placeholder="Enter password again" /><br /> 
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup