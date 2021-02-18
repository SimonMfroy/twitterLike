import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { Form, Input, Button } from 'antd';
import AllPost from 'components/AllPost';
import {Container} from 'react-bootstrap';

const getCurrentUser = (state) => state.userInfo;

//const cookie = Cookies.get('jwt');

const Posts = () => {

  const UserId = useSelector(getCurrentUser);
  console.log(" Post User id : ",UserId);
  const cookie = Cookies.get('jwt');

  const onFinish = (values: any) => {
    console.log("post values : ",values);

    const data = {
      text:values.user.introduction,
      user: UserId.id
    };
    fetch('http://localhost:1337/posts', {
      method: 'post',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookie}`,
    },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log("Login Responses :  ",response);
    })
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };



  return (
  <Container>
    <Form {...layout} name="nest-messages" onFinish={onFinish} >
      <Form.Item name={['user', 'introduction']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <AllPost />
  </Container>
  );
};

export default Posts;
//