import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DeleteUSER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login  = (props) => {
    const [formState, setFormState] = useState ({ email: '', password: '' });
    const [signin, { error }] = useMutation(DeleteUSER);

    // set state for alert - CSS NOTE: CREATE A MODAL FOR ALERT
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
        <form onSubmit={handleFormSubmit}>
            <h1>DELETE PROFILE</h1>
            <h3>Note: The Profile will be permanantly deleted!!!</h3>
            <h3>Use Caution!!!</h3>

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


            <button type="submit" className="btn btn-success btn-block">Delete</button>
            <br></br>
            <br></br>
            
            
            <button className="btn no-underline text-md">
                <a href="/">Home</a>
            </button>
        </form>
    );
}

export default Login;
