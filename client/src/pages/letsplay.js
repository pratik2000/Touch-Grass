import React from "react";
import LawnGamesimg from '../images/lawngames.png';
import { Link } from 'react-router-dom';
import grasskid from '../images/touchgrasskid.jpg';
import Nav from '../components/Nav';
import GoogleMapReact from 'google-map-react';
import { useState, useEffect } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GMAP_API_KEY = "AIzaSyBwVvRwK_cLlFxO0bdGe8m7d16unPAwLcQ"



class SimpleMap extends React.Component {
    static defaultProps = {
        center: { lat: 35.90496, lng: -79.04707 },
        zoom: 11
    };

        
    render() {

        debugger;
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
}


function LetsPlay() {

    let url = 'https://www.gofundme.com/f/touchgrass';

    const defaultProps = {
        center: { lat: 35.90496, lng: -79.04707 },
        zoom: 11
    };

    //const [maploc, setMapLoc] = useState({ let: 35.90496, lon: -79.04707 });   //Weather City

    const getNewLocation = (event) => {
        //Update location
        
        //setMapLoc({
        //    let: 5.9049,
        //    lon: -9.04707
            
        //});
                
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
                        <div className="row align-items-center my-5" style={{ width: '50%', height: '200px' }}>
                            <SimpleMap/>
                        </div>
                        
                    </div>
            </div>
      </div>
    </div>
  );
}

export default LetsPlay;
