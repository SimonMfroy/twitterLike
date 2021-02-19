import React from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

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
   fetch(`http://localhost:1337/auth/local/register`, {
    method: 'post',
    headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(data)
 })
   .then((response) => response.json())
   .then((response) => {
     console.log(response);
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
