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

    return (
        <div>
            
            <nav class="navbar navbar-inverse navbar-static-top">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {AuthC.checkToken() ? (
                    <>
                        <div className='p-8 inline-block'>
                            {window.location.pathname !== "/whois" ? <Link to='/' className='p-1.5 ml-16 mb-5 text-md font-mono text-white bg-blue-500 hover:bg-purple-700 rounded-lg'>
                                About Me </Link> : ""}

                            {window.location.pathname === "/" ? "" :
                                <button className="btn btn-lg btn-light m-2 ml-4 font-mono text-base text-md text-white bg-red-400 hover:bg-purple-700 rounded-lg p-1"
                                    onClick={logout}>Sign out</button>
                            }
                        </div>
                    </>
                ) : (
                    <>
                            <div class="navbar-expand-sm" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/Login">Sign In</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/Signup">Sign up</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/UpdateUser">Update</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/DelUser">Delete</a>
                                    </li>
                                    <li class="nav-item" >
                                        <a class="nav-link" onClick={logout}>Sign Out</a>
                                    </li>
                                    <button className="btn btn-light m-2 ml-4 font-mono rounded-lg p-1"                                        
                                        onClick={logout}>Sign out</button>
                                </ul>

                            </div>
                    </>
                )}

                
            </nav>




            {window.location.pathname === "/whois" ? <h2 className="text-center text-3xl p-7 font-landing text-red-300">Welcome!</h2> : ""}

            <div className='flex justify-end items-center h-16 relative underline font-mono'>

                <div>
                    
                </div>
            </div>
        </div>
    );


};

export default Nav;
