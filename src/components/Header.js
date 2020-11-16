/*
	Header html component.
*/

import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation
} from 'react-router-dom';

import { standalonePages } from '../utilities/utilities';

const Header = (props) => {
	let { path, url } = useRouteMatch();
	let location = useLocation(); 
	// alert(path);
	// alert(url);
	// alert(props.location);
	// alert(window.location.pathname);
	// alert(path);
	// alert(url);
	// alert(location.pathname);
	const noHeaderPages = ['/admin', '/admin/posts', '/admin/create-post', '/login'];

	return !standalonePages.includes(location.pathname) ?
	// (location.pathname !== '/admin' && location.pathname !== '/login' ) ? 
		(
			<header>
				<div className="logo"><a href="/" className="logo-link">Home</a></div>
				<nav>
		            <ul>
		              <li>
		                <Link to="/">Home</Link>
		              </li>
		              <li>
		                <Link to="/about">About</Link>
		              </li>
		              <li>
		                <Link to="/contact">Contact</Link>
		              </li>
		              <li>
		              	<Link to="/admin-posts-page">Admin Posts Page</Link>
		              </li>
		              <li>
		              	<Link to="/post-archive">Post Archive</Link>
		              </li>
		              <li>
		              	<Link to="/admin">Admin Page</Link>
		              </li>
		              <li>
		              	<Link to="/login">Login Page</Link>
		              </li>
		              <li>
		              	<Link to="/single-post">Single Post Page</Link>
		              </li>
		            </ul>
	          	</nav>
			</header>
		) : '';
}

export default Header;