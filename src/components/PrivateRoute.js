/*
	This file defines PrivateRoute component,
	that is used for Authentication.
*/
import React from 'react';
import {
	Route,
	Redirect
} from 'react-router-dom';
import auth from '../Authentication';

const PrivateRoute = ({ children, ...rest }) => {

	return ( 
		<Route
			{...rest}
			render={({location}) => 
				auth.isAuthenticated() ? (children)
				: (
					<Redirect
					 to={{ pathname: '/login', state: { from: location } }}
					/>
			)}
		/>
	);
}

export default PrivateRoute;