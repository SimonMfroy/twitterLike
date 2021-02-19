import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

import Cookies from 'js-cookie'

import { useDispatch } from 'react-redux';
import { loginUser } from 'stores/actions';

const Login = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const fetchLogin = (values) => {
    values.preventDefault();

    console.log('Success:', values);
    const myData = values;

    const data = {
      identifier,
      password,
    };

    fetch(`http://localhost:1337/auth/local`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log("Login Responses : ", response);
      if (response.statusCode === 400) {
        console.log("Mauvais mot de passe");
      }
      else {
        Cookies.set('jwt', response.jwt, { expires: 7 });
        dispatch(loginUser(response));
        console.log("dispatch : ",dispatch(loginUser(response)));
        history.push("/");
      }
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Identifiez-vous</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus value={identifier} onChange={(values) => setIdentifier(values.target.value)}/>
                  <label htmlFor="inputEmail"></label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Mot de passe" required value={password} onChange={(values) => setPassword(values.target.value)}/>
                  <label htmlFor="inputPassword"></label>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                  <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi ?</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={fetchLogin}>Connexion</button>
                <hr className="my-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
