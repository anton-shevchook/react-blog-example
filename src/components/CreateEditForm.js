/*
	This File defines Create Edit Form Component.
*/

import React, { useState, useEffect } from 'react';
import { useInput } from '../utilities/utilities';

const CreateEditForm = (props) => {

	// lets do create form first
	// not sure what to do with image in React, research, do it for later.
	// how are we working with state?
	/*
		we have title, content, id(if it's edit form)
		it's create for now
		we need to make handle change
		make state change

		we copied handleChange
		now, we should make submit.

		and then try writing for handling edit form?
	*/

	// const [title, setTitle] = useState("");

	// const { value: title, setValue: setTitle } = useInput(''); 

	// if(props.post) {
	// 	const { post } = props;
	// 	const postTitle = post.title;
	// 	const postContent = post.body;
	// 	// const [values, setValues] = useState({title: postTitle, content: postContent});		
	// } else {

	// }



	// const { post } = props || { post: { title: '', content: '' } };

	const { post = { title: 'stoppin', content: 'poppin' }, editPost, createPost } = props;

	console.log('createPost: ', createPost);



	console.log({post});

	// let postTitle = '';
	// let postContent = ''; 

	// if(post){
	// 	postTitle = post.title;
	// 	postContent = post.content;	
	// }
	

	const [values, setValues] = useState(post);

	const { id, title, content } = values;

	console.log('comp values', {values});

	const initState = {
		title: '',
		content: ''
	};

	// useEffect(() => {
	// 	console.log('post', {post});

	// 	if(props.post){
	// 		alert('useEffect, setValues', post.title, post.content);
	// 	setValues({
	// 		title: post.title,
	// 		content: post.content
	// 	});
	// }



	// }, []);



	const handleChange = (e) => {
		console.log(`${e.target.name}: ${e.target.value}`);

		let { name, value } = e.target;

		// if(name == 'title') {
		// 	setTitle(value);
		// }

		// it probably happens later, after following console.logs
		setValues({
			...values,
			// title: '', content: ''
			[name]: value
			// title: value
		});


		// console.log(`title: ${title}`);
		// console.log(`content: ${content}`);


	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log('Sending post:', {post});

		if(id) {
			alert('editPost');
			const post = {
				id,
				title,
				body: content
			};
			editPost(id, post);	
		} else {
			alert('createPost');
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
			<div>{JSON.stringify(props.post)}</div>
			<div>{JSON.stringify(values)}</div>
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
			<div class="form-field">
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

export default CreateEditForm;