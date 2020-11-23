/*
	This file defines utility functions and constants.
*/

import { useState } from 'react';

const adminPages = [
	'/admin',
	'/admin/posts',
	'/admin/create-post',
	'/admin/edit-post'
];

const noTemplatePages = [
	'/login'
];

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		setValue
	};
}



export { adminPages, noTemplatePages, useInput };