import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" />
                </div>

<br></br>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="johndoe@aol.com" />
                </div>

<br></br>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="minimum 8 characters" />
                </div>
<br></br>
                <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/Login">sign in?</a>
                </p>
            </form>
        );
    }
}