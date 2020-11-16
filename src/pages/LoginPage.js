/*
	This file defines Login Page Components.
*/
import React from 'react';
import {
	useHistory,
	useLocation
} from 'react-router-dom';
import auth from '../Authentication';

const LoginPage = () => {
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };
	
	let login = () => {
		auth.login(() => { 
			history.replace(from);
		});
	}
	return ( 
		<div>
			<h1>This is Login Page.</h1>
			<button onClick={login}>Log In</button>
		</div>
	);
}

export default LoginPage;