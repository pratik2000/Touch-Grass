import React from "react";
import { Link, withRouter } from "react-router-dom";
import AuthC from '../utils/auth';


//<img src={logo} alt="Logo" /> 

const Nav = () => {
    const logout = (event) => {
        event.preventDefault();
        debugger
        AuthC.logout();
    };

    //show user name
    const username = () => {
        return "33"; //AuthC.getProfile(); 
    };

    return (
        <div>            
            <nav class="navbar navbar-inverse navbar-static-top">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                {AuthC.loggedIn() ? (
                    <>
                      
                        <div class="navbar-expand-sm" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                                                
                                <li class="nav-item">
                                    {
                                        window.location.pathname === "/LetsPlay" ? "" :
                                            <a class="nav-link" href="/DelUser">Delete</a>
                                    }                                    
                                </li>

                                <li class="nav-item">
                                    {
                                        window.location.pathname === "/LetsPlay" ? "" :
                                            <a class="nav-link" href="/UpdateUser">Update</a>
                                    }
                                </li>

                                <li class="nav-item" >
                                    <a class="nav-link" onClick={logout}>Sign Out</a>
                                </li>
                            </ul>
                        </div>

                        
                        <h5 className="nav-link">Welcome!!!</h5>
                    </>
                ) : (
                        <>                            
                            <div class="navbar-expand-sm" id="navbarSupportedContent">                                
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">                                        
                                        <a class="nav-link" href="/">Home</a>                                        
                                    </li>
                                    <li class="nav-item">                                        
                                        {
                                            window.location.pathname === "/Login" ? "" :
                                                <a class="nav-link" href="/Login">Sign In</a>
                                        }
                                    </li>
                                    <li class="nav-item">
                                        {
                                            window.location.pathname === "/Signup" ? "" :
                                                <a class="nav-link" href="/Signup">Sign up</a>
                                        }
                                        
                                    </li>                                    
                                </ul>
                            </div>

                            
                    </>
                )}

                
            </nav>

        </div>
    );


};

export default Nav;
