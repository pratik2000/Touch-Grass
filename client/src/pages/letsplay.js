import React from "react";
import LawnGamesimg from '../images/lawngames.png';
import { Link } from 'react-router-dom';
import grasskid from '../images/touchgrasskid.jpg';

function LetsPlay() {

  let url = 'https://www.gofundme.com/f/touchgrass';
  return (

    <div>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>


          {/**content here */}
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>

          {/**content here */}
        </>
      ) : (
        
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>





    
    
  );
}

export default LetsPlay;
