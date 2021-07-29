import React from "react";
import grasskid from '../images/touchgrasskid.jpg';
import lawnGames from "../images/lawngames.png";
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { fetchWeather } from '../utils/getWeatherAPI';
//import { GMap } from '../utils/gmapapi';
import { useState, useEffect } from 'react';
import { getWeather } from '../utils/getWeatherAPI';
//import GoogleMapReact from 'google-map-react';
// function to search for random recipes
//import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;
//const GMAP_API_KEY = "AIzaSyBwVvRwK_cLlFxO0bdGe8m7d16unPAwLcQ";
//class SimpleMap extends React.Component {
//    static defaultProps = {
//        center: { lat: 35.90496, lng: -79.04707 },
//        zoom: 11
//    };

//    render() {
//        return (
//            <GoogleMapReact
//                bootstrapURLKeys={{ key: GMAP_API_KEY }}
//                defaultCenter={this.props.center}
//                defaultZoom={this.props.zoom} >
//                <AnyReactComponent
//                    lat={59.955413}
//                    lng={30.337844}
//                    text={'Grass Touch'}
//                />
//            </GoogleMapReact>
//        );
//    }
//}

function Home() {

   
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

                        <h1 className='pl-14 pt-5 text-offWhite font-mono text-xl '>{weatherCity} {currentTempF}&#8457;</h1>
                        
            </div>


      </div>
            </div>
</div>
  );
}

export default Home; 
