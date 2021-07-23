import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';
import { Redirect } from 'react-router';
import { setContext } from '@apollo/client/link/context';
// import { Nav, Footer, Home, Map, User, Login } from "./components";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./components/login.component";
import signup from "./pages/signup";
import Home from "./pages/Home";
import Auth from '../src/utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  
  const token = localStorage.getItem('id_token');
  return {

    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },

  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

return (
<ApolloProvider client={client}>
    <Router>
        <div className="container-fluid">

          <div className="container-fluid">
            <Route exact path="/login">
              <Home />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/profiles/:username">

            </Route>
          </div>
          <Footer />
        </div>
    </Router>
    </ApolloProvider>

);
}

export default App;


