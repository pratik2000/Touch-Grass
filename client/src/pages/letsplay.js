import React from "react";
import LawnGamesimg from '../images/lawngames.png';
import { Link } from 'react-router-dom';
import grasskid from '../images/touchgrasskid.jpg';
import Nav from '../components/Nav';
import GoogleMapReact from 'google-map-react';
import { useState, useEffect } from 'react';
import SimpleMap from '../components/simpleMap';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GMAP_API_KEY = "AIzaSyBwVvRwK_cLlFxO0bdGe8m7d16unPAwLcQ"


/*
class SimpleMap extends React.Component {

    static defaultProps = {
        center: { lat: 35.90496, lng: -79.04707 },
        zoom: 11
    };

        
    render() {

        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: GMAP_API_KEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom} >
                <AnyReactComponent
                    lat={159.955413}
                    lng={130.337844}
                    text={'Grass Touch'}
                />
            </GoogleMapReact>
        );
    }
}*/


function LetsPlay() {
/*
    let latVar = 35.90496;
    let lngVar = -79.04707;
    */

    const init = (centerObjPassed) => {

    }


    let url = 'https://www.gofundme.com/f/touchgrass';

    const defaultProps = {
        center: { lat: 35.90496, lng: -79.04707 },
        zoom: 11
    };

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    const [maploc, setMapLoc] = useState({ lat: 35.90496, lng: -79.04707 });   //Weather City

    const getNewLocation = (event) => {
        //Update location
        
        

        var newLat = getRandomArbitrary(30, 40);
        var newLng = getRandomArbitrary(-90, -70);


        console.log("newlat=>"+newLat);
        console.log("newlng=>"+newLng);
        
        setMapLoc({
            lat: newLat,
            lng: newLng
            
        });

        //latVar = newLat;
        //lngVar = newLng;

        debugger;
        console.log("latVar>>>>>>"+maploc.lat);
        console.log("lngVar>>>>>>"+maploc.lng);
        
        //window.location.reload();
        /*
        setMapLoc({
            lat: 35.90496,
            lng: -79.04707
            
        });*/

                
    };



    return (

    <div className="home" style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/grass.png'})` }}>          

        <div className="container">
                <div className="m-0 text-center text-light bg-gradient">
                    <nav class="navbar navbar-dark bg-gradient">
                        <Nav />
                    </nav>
                </div>
              
              <div className="row align-items-center my-5">
                  
                  <div className="col-lg-7">
                
                <img 
                            className="img-fluid rounded mb-4 mb-lg-0 my-5 pb-5"
                            alt="picture of lawn with game sign" width="50%"
                    src={LawnGamesimg} />

                
                
                {/* 
                
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                          src="../images/lawngames.png"
                  alt=""/>
                
                
                */}
                
                  </div>

              <div className="col-sm-5">
                <h1 className="font-weight-light">Let's Play</h1>
                    <p>
                            Welcome to Touch Grass Games! Pick one of the games below to play.
                    </p>
                        <button className="btn btn-success btn-block" onClick={getNewLocation} >Get New Location</button>
              </div>
                    <div>
                    <p>
                            Latitude: {maploc.lat} 
                           
                    </p>

                    <p>
                            
                            Longitude: {maploc.lng} 
                    </p>

                        <div className="row align-items-center my-5" style={{ width: '100%', height: '200px' }}>
                            <SimpleMap center={maploc} />
                        </div>
                        
                    </div>
            </div>
      </div>
    </div>
  );
}

export default LetsPlay;
