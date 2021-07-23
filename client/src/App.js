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
import SignUp from "./components/signup.component";
import Home from "./components/Home";
//import Auth from '../src/utils/auth';

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
  let url = 'https://www.gofundme.com/f/touchgrass?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1';

  return (<Router>
    <div className="App">
      <Nav />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Home' component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
          <Footer/>
          
          
        </div>
      </div>
    </div></Router>
  );
}
/*
function App() {
  const [user, setUser] = useState(false)

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }

  return (
    <div className="App">
      <Router>
      <Nav />
      <div className="auth-wrapper">
        <div className="auth-inner">
        <Route exact path='/' handleLogin={handleLogin} render={
          props => <Login {...props} user={user.toString()}
            handleLogin={handleLogin} />} />
        <ProtectedRoute exact path='/login' user={user} handleLogout={handleLogout} component={Login} />
        <Route exact path='/unauthorized' component={Unauthorized} />
        </div>
    </div>
      </Router>
  </div>
  );
}
*/

export default App;


