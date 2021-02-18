//import { useSelector } from 'react-redux';
import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'stores/actions';
import {Container, Card} from 'react-bootstrap';

// const getCurrentUser = (state) => state.user_info;

const AllPost = () => {

  const [arrayPost, setArrayPost] = useState([]);
  const cookie = Cookies.get('jwt');

  // const {AllPostSlug} = useParams();
  // const dispatch = useDispatch();
  // const getCurrentUser = (state) => state.userFetch;
  // const UserFetch = useSelector(getCurrentUser);

  const FetchPost = () => {
    fetch("http://localhost:1337/posts", {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${cookie}`, 
      'Content-Type': 'application/json'
    },
    })
    .then((response) => response.json())
    .then((response) => {
      console.log("response : ",response);
      setArrayPost(response);
      console.log("set array post : ", setArrayPost(response));
      console.log("arrayPost : ",arrayPost);
    })
    .catch((err) => console.log(err));
  }
  
  useEffect(() => {
    //dispatch(fetchInfo());
    FetchPost();
  }, []);

    return (
      <Container>
        {arrayPost.map( (post) =>
          {post.text && 
          <div>
            <Card style={{ width: '18rem' }}>
            <Card.Title> {post.user.username}</Card.Title>
            <Card.Body>
              <Card.Text>
                {post.text}
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">{post.created_at}</Card.Subtitle>
            </Card.Body>
            </Card>
          </div>
          }
        )}         
      </Container>
    );
};

export default AllPost;

/*

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            { UserFetch && 
              <div>
              <Card.Title> {UserFetch.username}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{UserFetch.email}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">{UserFetch.created_at}</Card.Subtitle>
              <Card.Text>
              </Card.Text>
              </div>
            }
          </Card.Body>
        </Card>

*/