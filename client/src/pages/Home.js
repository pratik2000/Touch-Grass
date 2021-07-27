import React from "react";
import grasskid from '../images/touchgrasskid.jpg';
import { Link } from 'react-router-dom';

function Home() {

  let url = 'https://www.gofundme.com/f/touchgrass';
  return (
    <div className="home" style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/grass.png'})` }}>          

        <div className="container">

              
              <div className="row align-items-center my-5">
                  
                  <div className="col-lg-7">

                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                   src="http://placehold.it/900x400"
                  alt=""/>
                  </div>

              <div className="col-lg-5">
                <h1 className="font-weight-light">Touch-Grass</h1>
                    <p>
                          Welcome to Touch Grass! This site is currently under construction and we are plannning on bringing this project to life as soon
                          as possible! We just need to hit our goal of 1k to bring this app into production if you contribute today click the link below!
                    </p>

                      <a href={url}>Donate Today!  </a>

                      <div>
                          <Link to="/Login"> Sign in </Link>
                      </div>

                      <div>
                          <Link to="/Signup"> Sign Up </Link>
                      </div>

                      <div>
                          <Link to="/UpdateUser">Update User</Link>
                      </div>

                      <div>
                          <Link to="/DelUser">Delete User</Link>
                      </div>
              </div>
                    
            </div>
      </div>
    </div>
  );
}

export default Home; 
