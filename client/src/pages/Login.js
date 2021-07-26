import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [signin, { error }] = useMutation(LOGIN_USER);


  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const mutationResponse = await signin({
        variables: {
          email: formState.email,
          password: formState.password
        },
      });

      const token = mutationResponse.data.signin.token;
      Auth.login(token);

      console.log(token);
    } catch (e) {
      console.log(e);
      setShowAlert(true);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
    /*

    <div className="navigation">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Touch Grass</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>




    <div className="navigation">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          
        </div>
      </nav>
    </div>

    */

  return (

    <form onSubmit={handleFormSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
<br></br>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                    <br></br>
                <button type="submit" className="btn btn-success btn-block">Submit</button>
                <p className="forgot-password text-right">
                     <a href="/signup">Need an account?</a>
                </p>
            </form>
    
  );
}

export default Login;


