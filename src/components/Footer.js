/*
	This file describes Footer Component.
*/

import React from 'react';
import { 
  Link,
  useLocation
} from 'react-router-dom';

import { adminPages, noTemplatePages } from '../utilities/utilities';

const Footer = () => {
  let location = useLocation();
	return !adminPages.includes(location.pathname) && !noTemplatePages.includes(location.pathname) ?
    (
		  <footer class="border">
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
              </ul>
          </nav>
      </footer>
	 ) : '';
}

export default Footer;