import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './index.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

import NavBar from 'components/Navbar'
import { Provider, useSelector } from 'react-redux';
import reducer from 'stores/reducer';

import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Profil from 'pages/Profil';
import Posts from 'pages/Posts';

const App = () => {

  const getCurrentUser = (state) => state.userInfo;
  const UserId = useSelector(getCurrentUser);
  const checkAuth = () => {
    if(UserId !== null){
      return true;
    }else{
      return false;
    }
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      checkAuth() ? (
        <Component {...props} />
        ) : (
        <Redirect to={{ pathname: '/login' }} />
        )
        )} />
    );

  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Container>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <PrivateRoute path="/Profil/:profilSlug" component={Profil} />
            <PrivateRoute path="/Posts" component={Posts} />
          </Container>
        </Switch>
      </main>
    </Router>
  );
};

ReactDOM.render(<Provider store={reducer}> <App /> </Provider> , document.getElementById('root'));
