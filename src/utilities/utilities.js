/*
	This file defines utility functions and constants.
*/

import { useState } from 'react';

const standalonePages = [
	'/admin',
	'/admin/posts',
	'/admin/create-post',
	'/admin/edit-post',
	'/login'
];

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue
	};
}



export { standalonePages, useInput };