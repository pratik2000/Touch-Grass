import React from "react";
import LawnGamesimg from '../images/lawngames.png';
import { Link } from 'react-router-dom';
import grasskid from '../images/touchgrasskid.jpg';
import Nav from '../components/Nav';

function LetsPlay() {

  let url = 'https://www.gofundme.com/f/touchgrass';
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
                    alt="picture of lawn with game sign"
                    src={LawnGamesimg} />

                
                
                {/* 
                
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                          src="../images/lawngames.png"
                  alt=""/>
                
                
                */}
                
                  </div>

              <div className="col-lg-5">
                <h1 className="font-weight-light">Let's Play</h1>
                    <p>
                          Welcome to Touch Grass Games! Pick one of the games below to play.
                    </p>
                    
                    <div>
                        <Link to="/">Home </Link>
                    </div>
              </div>
                    
            </div>
      </div>
    </div>
  );
}

export default LetsPlay;
