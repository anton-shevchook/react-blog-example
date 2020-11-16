/*
	This file describes Footer Component.
*/

import React from 'react';
import { 
  Link,
  useLocation
} from 'react-router-dom';

import { standalonePages } from '../utilities/utilities';

const Footer = () => {
  let location = useLocation();
	return !standalonePages.includes(location.pathname) ?
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