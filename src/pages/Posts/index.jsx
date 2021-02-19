import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import {Container} from 'react-bootstrap';

const getCurrentUser = (state) => state.userInfo;

const Posts = () => {

  const [postText, setPostText] = useState();

  const UserId = useSelector(getCurrentUser);
  console.log(" Post User id : ",UserId);
  const cookie = Cookies.get('jwt');

  const fetchCreatePost = (values) => {
    values.preventDefault();

    const data = {
      text: postText,
      user: UserId.id
    };
    fetch(`http://localhost:1337/posts`, {
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


  return (

  <>

  <Container>

  <br/>

  <div className="">
    <h1>Exprimez-vous</h1>
  </div>

  <div className="card gedf-card" name="nest-messages">
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Publiez
          un avis</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
        </li>
      </ul>
    </div>
    <div className="card-body">
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
          <div className="form-group">
            <label className="sr-only" htmlFor="message">post</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Dites-nous tout..." onChange={(values) => setPostText(values.target.value)}></textarea>
          </div>

        </div>
        <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
          <div className="form-group">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile"/>
              <label className="custom-file-label" htmlFor="customFile">Upload image</label>
            </div>
          </div>
          <div className="py-4"></div>
        </div>
      </div>
      <div className="btn-toolbar justify-content-between">
        <div className="btn-group">
          <button htmlType="submit" className="btn btn-primary" onClick={fetchCreatePost}>Partager</button>
        </div>
        <div className="btn-group">
          <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-globe"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="/#"><i className="fa fa-globe"></i> Public</a>
            <a className="dropdown-item" href="/#"><i className="fa fa-users"></i> Friends</a>
            <a className="dropdown-item" href="/#"><i className="fa fa-user"></i> Just me</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  </Container>

  </>

  );
};

export default Posts;



    // <Form {...layout} name="nest-messages" onFinish={onFinish} >
    //   <Form.Item name={['user', 'introduction']} label="Message">
    //     <Input.TextArea />
    //   </Form.Item>
    //   <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>
