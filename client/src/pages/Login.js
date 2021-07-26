import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Navbar from '../components/login.component';


const Login = () => {
  
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
   

  return (

    <div className="container">

   


    <div className="container py-5">

    
      <h2 className="flex justify-content-center py-5">Sign in</h2>
      <form onSubmit={handleFormSubmit}>

        <div className="flex flex-col space-between py-5">
          <label className="font-mono" htmlFor="email">Email address:</label>
          <input
            className="py-2 px-3 text grey-300"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col py-5">
          <label className="font-mono" htmlFor="pwd">Password:</label>
          <input
            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text grey-300 leading-tight focus:outline-none focus:shadow-outline ml-2"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          />
        </div>

        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex justify-center">
          <button className="flex justify-center py-2 px-4" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
    
  );
}

export default Login;


