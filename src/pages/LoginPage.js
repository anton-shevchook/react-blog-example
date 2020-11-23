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
		<div class="login-page border">
			<h3>Please login into Blog</h3>
			<form onSubmit={(e)=>{e.preventDefault();}}>
				<div class="form-field">
					<label htmlFor="">Login</label>
					<input type="text" name="title" placeholder="Enter login" value="" />
				</div>
				<div class="form-field">
					<label htmlFor="">Password</label>
					<input type="text" name="title" placeholder="Enter password" value="" />
				</div>
				<div class="form-field sbmt-btn-container">
					<button class="login-btn" onClick={login}>Login</button>		
				</div>
			</form>
			
		</div>
	);
}

export default LoginPage;