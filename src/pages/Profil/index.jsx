//import { useSelector } from 'react-redux';
import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from 'stores/actions';
import {Container, Card} from 'react-bootstrap';

// const getCurrentUser = (state) => state.user_info;

const Profil = () => {


  const {profilSlug} = useParams();
	const cookie = Cookies.get('jwt');
  const dispatch = useDispatch();
  const getCurrentUser = (state) => state.userFetch;
  const UserFetch = useSelector(getCurrentUser);
  
  useEffect(() => {
    dispatch(fetchInfo());
    fetch(`http://localhost:1337/users/${profilSlug}`, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${cookie}`, 
      'Content-Type': 'application/json'
    }
    })
    .then((response) => response.json())
    .then((response) => {
      dispatch(fetchInfo(response));
    })
  }, []);

    return (
      <Container>
        <h1> Profil </h1>
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

      </Container>
    );
};

export default Profil;