import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LoginUSER } from '../utils/mutations';
import AuthC from '../utils/auth';

const Login  = (props) => {
    const [formState, setFormState] = useState ({ email: '', password: '' });
    const [signin, { error }] = useMutation(LoginUSER);
    
    const [showAlert, setShowAlert] = useState (false);

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
            AuthC.login(token);


            // clear form values
            setFormState({
                email: '',
                password: '',
            });
            window.location.assign('/LetsPlay');
            console.log(token);

            

        } catch (e) {
            console.log(e);
            setShowAlert(true);
        }

        
        
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                />
            </div>
            <br></br>
            <div className="form-group2">
                <label>Password</label>
                <input
                    className="form-control"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                />
            </div>

            {error ? (
                <div>
                    <p className="error-text">Email or Password not found or does Match our records</p>
                </div>
            ) : null}

            <br></br>


            <button type="submit" className="btn btn-success btn-block">Submit</button>
            <br></br>
            <br></br>

            <Link className="btn btn-success btn-block no-underline text-md" to='/'>
                Home
              </Link>

            <p className="forgot-password text-right">
                <a href="/Signup">Need an account?</a>
            </p>

        </form>
    );
}

export default Login;
