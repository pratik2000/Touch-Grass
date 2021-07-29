import React from "react";
import grasskid from '../images/touchgrasskid.jpg';
import lawnGames from "../images/lawngames.png";
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { fetchWeather } from '../utils/getWeatherAPI';
import { useState, useEffect } from 'react';

// function to search for random recipes

async function GetWeather() {  
    try {
        debugger
        var p1 = await fetchWeather();
        console.log(p1);
        debugger
    } catch (e) {
        console.error(e);
    }
};

function Home() {
    // create state for holding returned spoonacular api data
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    //useEffect(() => { GetWeather();}, []);  //API Key 

  let url = 'https://www.gofundme.com/f/touchgrass';
    return (
        <div>

            <div className="m-0 text-center text-light bg-gradient">
                <nav class="navbar navbar-dark bg-gradient">
                    <Nav/>
                </nav>                
            </div>

            <div className="bg-gradient"
                style={{
                    color: "black",
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/grass.png'})`
                }} >
          

            <div className="" >
              
                    <div className="row align-items-center text-dark bg-gradient">
                  
                  <div className="col-lg-7">

                    <img 
                    className="img-fluid rounded mb-4 mb-lg-0"
                    alt="picture of baby"
                    src={grasskid} />
                  </div>

                  <div className="col-lg-5">
                      <h1 className="font-weight-light">Touch-Grass</h1>
                    <p>
                          Welcome to Touch Grass! This site is currently under construction and we are plannning on bringing this project to life as soon
                          as possible! We just need to hit our goal of 1k to bring this app into production if you contribute today click the link below!
                    </p>

                      <a href={url}>Donate Today!  </a>

              </div>

                    
            </div>
      </div>
            </div>
</div>
  );
}

export default Home; 
