import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UpdatePW  } from '../utils/mutations';
import AuthC from '../utils/auth';
import Nav from '../components/Nav';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '', newpassword: '' });
    const [updatepw, { error }] = useMutation(UpdatePW );

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
            debugger
            const mutationResponse = await updatepw({
                variables: {                    
                    email: formState.email,
                    password: formState.password,
                    newpassword: formState.newpassword,
                },
            });

            debugger

            //const userUpdated = mutationResponse.data.updatepw.email; 
            //console.log(userUpdated);
            AuthC.logout();
            //Auth.login(token);
            //console.log(token);

        } catch (e) {
            console.log(e);
            setShowAlert(true);
        }
        // clear form values
        setFormState({
            email: '',
            password: '',
            newpassword: ''
        });
    };

    return (
        <div>
            <div className="m-0 text-center text-light bg-gradient">
                <nav class="navbar navbar-dark bg-gradient">
                    <Nav />
                </nav>
            </div>

            <form onSubmit={handleFormSubmit}>
                <h3>Update</h3>

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
                <div className="">
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
                <br></br>
                <div className="">
                    <label>New Password</label>
                    <input
                        className="form-control"
                        placeholder="******"
                        name="newpassword"
                        type="password"
                        id="newpassword"
                        value={formState.newpassword}
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
            </form>
        </div>
    );
}

export default Login;
