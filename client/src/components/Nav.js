import React from "react";
import AuthC from '../utils/auth';
import { useState, useEffect } from 'react';
import { getWeather } from '../utils/getWeatherAPI';

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

    const [findWeather, setMyWeather] = useState([]);   //API Data storage
    const [currentTempF, setTempValue] = useState(1);   //Temp Data
    const [weatherCity, setWeatherCity] = useState(1);   //Weather City

    useEffect(() => { GetWeather(); }, []);             //Update data after repaint

    async function GetWeather() {
        try {
            debugger
            //var p1 = await fetchWeather();
            //console.log(p1);
            let weatherdata;
            try {
                await getWeather()
                    .then(response => response.json())
                    .then(respval => weatherdata = respval);

                setMyWeather(weatherdata);
                let teK = ((weatherdata.main.temp - 273.15) * 1.8 + 32.00);
                //currentTempF = (teK - 273.15) * 1.8 + 32.00;
                setTempValue(teK.toFixed(1))
                setWeatherCity(weatherdata.name);
                console.log(weatherdata);
                debugger
            } catch (e) {
                debugger
                console.error(e);
            }
            debugger
        } catch (e) {
            console.error(e);
        }
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
                                    <a class="nav-link" href="/LetsPlay">Play</a>
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

                <h className='nav-link'>{weatherCity} {currentTempF}&#8457;</h>
            </nav>
            
        </div>
    );


};

export default Nav;
