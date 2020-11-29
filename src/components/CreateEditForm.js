/*
	This File defines Create Edit Form Component.
*/

import React, { useState, useEffect } from 'react';
import { useInput } from '../utilities/utilities';

const CreateEditForm = (props) => {

	const { post = { title: '', content: '' }, editPost, createPost } = props;

	console.log('createPost: ', createPost);



	console.log({post});


	const [values, setValues] = useState(post);

	const { id, title, content } = values;

	console.log('comp values', {values});

	const initState = {
		title: '',
		content: ''
	};



	const handleChange = (e) => {
		console.log(`${e.target.name}: ${e.target.value}`);

		let { name, value } = e.target;

		setValues({
			...values,
			[name]: value
		});

	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log('Sending post:', {post});

		if(id) {
			alert('Editting post');
			const post = {
				id,
				title,
				body: content
			};
			editPost(id, post);	
		} else {
			alert('Creating Post');
			const post = {
				title,
				body: content
			};
			createPost(post);
		}
		


	}

	if (props.id) {

	}

	return (
		<form action="" onSubmit={handleSubmit}>
			<div class="form-field">
				<label htmlFor="">Post Title</label>
				<input type="text" name="title" placeholder="Enter title" onChange={handleChange} value={values.title} />
			</div>
			<div class="form-field">
				<label htmlFor="">Post Content</label>
				<textarea name="content" id="" cols="30" rows="20" placeholder="Post Content" onChange={handleChange} value={content}>
				</textarea>
			</div>
			<div class="form-field">
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

export default CreateEditForm;