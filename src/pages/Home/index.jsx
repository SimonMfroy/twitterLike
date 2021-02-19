import React from 'react';
import AllPost from 'components/AllPost';
import {Container} from 'react-bootstrap';

const Home = () =>{

	return (
    <>
    <div className="jumbotron jumbotron-fluid">
     <video muted={true} autoPlay={true} loop={true}>
      <source src="https://static.videezy.com/system/resources/previews/000/036/505/original/DSCF3425-264.mp4" type="video/mp4"/>
      </video>
      <div className="container">
        <h1 className="display-4">NotaSocial Media</h1>
        <p className="lead">Bienvenue sur notre application pour les gens insociable, partagez votre amour et vos passions !</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/#" role="button">Inscription</a>
        </p>
      </div>
    </div>
    <div>
      <Container>
        <AllPost />
      </Container>
    </div>
    </>
  )
};

export default Home
