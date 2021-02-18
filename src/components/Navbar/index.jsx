import React,{useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import {Navbar, Nav, Button} from 'react-bootstrap';
import Cookies from 'js-cookie'

import { useDispatch ,useSelector } from 'react-redux';
import { decoUser } from 'stores/actions';

const getCurrentUser = (state) => state.userInfo;

const NavBar = () =>{

	const UserId = useSelector(getCurrentUser);
	const history = useHistory();
	const dispatch = useDispatch();
	const CurrentUser = Cookies.get('jwt');

  useEffect(() => {
  }, [UserId]);

	const Deconnexion = () => {
		Cookies.remove('jwt');
		dispatch(decoUser());
		history.push("/login");
	}

	return(	
		<Navbar bg='light'> 
    		<Navbar.Brand>ThpBook</Navbar.Brand>
    		<Link to="/">Home</Link>
				{!CurrentUser && <Link to="/login">Login</Link>}
				{!CurrentUser	&& <Link to="/register">Register</Link>}
				<Link to="/profil/me">Profil</Link>
				<Link to="/posts">Posts</Link>
				
				<Nav className="mr-auto"></Nav>
				{CurrentUser && <Button onClick={Deconnexion}> Déconnexion </Button>}		
  	</Navbar>
	)
};

export default NavBar