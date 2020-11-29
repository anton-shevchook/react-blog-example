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

import { adminPages, noTemplatePages } from '../utilities/utilities';

const Header = (props) => {
	let { path, url } = useRouteMatch();
	let location = useLocation(); 

	const noHeaderPages = ['/admin', '/admin/posts', '/admin/create-post', '/login'];

	return !adminPages.includes(location.pathname) ?
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
		              	<Link to="/post-archive">Post Archive</Link>
		              </li>
		              <li>
		              	<Link to="/admin">Admin Page</Link>
		              </li>
		              <li>
		              	<Link to="/login">Login Page</Link>
		              </li>
		            </ul>
	          	</nav>
			</header>
		) : adminPages.includes(location.pathname) ? (
			<header>
				<div className=""><Link to="/">Back to site</Link></div>
			</header>
		) : '';
}

export default Header;