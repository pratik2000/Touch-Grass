import React, { useState } from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';


import '../App.css';


const Signup = () => {


  const [formState, setFormState] = useState({ email: '', password: '', name: '' });
  const [addUser] = useMutation(ADD_USER);

  
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

      const mutationResponse = await addUser({

        variables: {

          email: formState.email,
          password: formState.password,
          name: formState.name,
          
        },
      });
      //const token = "";
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
      console.log(">>>>>>>TOKEN>>>>>>>"+token);
      window.location.assign('/home');

    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setFormState({
      email: '',
      password: '',
      name: '',

    });
    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-row mx-20">
      

        
        <div className="flex flex-col">



          <div className="flex flex-col">

            <h2 className="flex justify-center">Sign up</h2>

            <form className="flex flex-col justify-center" onSubmit={handleFormSubmit}>

              <div className="flex flex-col">
                <label className="font-mono" htmlFor="name">Name:</label>
                <input
                  className="ml-2"
                  placeholder="name"
                  name="name"
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col ml-10">
                <label className="font-mono" htmlFor="email">Email:</label>
                <input
                  className="ml-3"
                  placeholder="exampleaddress@email.com"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}

                />
              </div>

              <div className="flex flex-col ml-10">
                <label className="font-mono" htmlFor="pwd">Password:</label>
                <input
                  className="ml-3"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center pt-8">
                <button className="flex justify-center py-2 px-4 " type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;