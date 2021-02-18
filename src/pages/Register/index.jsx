import React from 'react';
//import {Link, Redirect} from 'react-router-dom';
import { Form, Input, Button} from 'antd';
//import Cookies from 'js-cookie'
//import RegisterUser from 'components/RegisterUser'


const Register = () =>{

 	const layout = {
  	labelCol: { span: 8 },
  	wrapperCol: { span: 16 },
	};

	const tailLayout = {
  	wrapperCol: { offset: 8, span: 16 },
	};

  const onFinish = (values: any) => {
  	// test de registration :
    console.log('Success:', values);
    const testData = values;
   
    const data = {
			username:testData.username,
  		email: testData.user.email,
  		password: testData.password
		};
  	fetch('http://localhost:1337/auth/local/register', {
  		method: 'post',
  		headers: {
    	'Content-Type': 'application/json'
  	},
  		body: JSON.stringify(data)
		})
		.then((response) => response.json())
  	.then((response) => {
    	console.log(response);
      //<Redirect to={{ pathname: '/login' }} />
   //  	Cookies.set('jwt', response.jwt, { expires: 7 });
			// console.log(Cookies.get('jwt'));
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
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email', message: 'Please input your Email!' }]}>
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

export default Register