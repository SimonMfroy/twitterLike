import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button} from 'antd';
import Cookies from 'js-cookie'

import { useDispatch } from 'react-redux';
import { loginUser } from 'stores/actions';

const Login = () =>{

const history = useHistory();
const dispatch = useDispatch();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values: any) => {
    
    
    console.log('Success:', values);
    const testData = values;
   
    const data = {
      identifier:testData.identifier,
      password: testData.password
    };
    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log("Login Responses :  ",response);
      if(response.statusCode === 400){
        console.log("Mauvais mot de passe");
      }
      else{
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
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Identifier"
        name="identifier"
        rules={[{ required: true, message: 'Please input your username or email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login