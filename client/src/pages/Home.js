import React from "react";

function Home() {
  let url = 'https://www.gofundme.com/f/touchgrass?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1';
  return (
    <div className="home" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/grass.png'})` 
    }}>
      <div className="container">
        <div className="row align-items-center my-5">

          <div className="col">
            <h1 className="font-weight-light">Home</h1>
            <p>
              Welcome to Touch Grass! Currently this is is under construction, our mission is to bring people together with a social app that 
              encourances social enteraction, if you could help us out we would really appreciate it!!!
            </p>
          </div>
          <h3>Donate here:</h3>
          <ul>
          <a href={url}>Fundraiser</a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;