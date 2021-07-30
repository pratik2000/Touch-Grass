import React from "react";
import LawnGamesimg from '../images/lawngames.png';
import { Link } from 'react-router-dom';
import grasskid from '../images/touchgrasskid.jpg';
import Nav from '../components/Nav';
import GoogleMapReact from 'google-map-react';
import { useState, useEffect } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GMAP_API_KEY = "AIzaSyBwVvRwK_cLlFxO0bdGe8m7d16unPAwLcQ"

function SimpleMap(props) {

        

        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: GMAP_API_KEY }}
                defaultCenter={props.center}
                defaultZoom={11} >
                <AnyReactComponent
                    lat={159.955413}
                    lng={130.337844}
                    text={'Touch Grass'}
                />
            </GoogleMapReact>
        );
    

}
/*
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
                    lat={this.props.lat}
                    lng={this.props.lng}
                    text={'Grass Touch'}
                />
            </GoogleMapReact>
        );
    }
}*/

export default SimpleMap;