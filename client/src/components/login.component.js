import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
<br></br>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

               
                    <br></br>
              

                <button type="submit" className="btn btn-success btn-block">Submit</button>
                <p className="forgot-password text-right">
                     <a href="/sign-up">Need an account?</a>
                </p>
            </form>
        );
    }
}