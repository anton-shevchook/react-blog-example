/*
	This file defines Admin Edit Post Page component.
*/

import React, { useState, useEffect } from 'react';
import CreateEditForm from '../components/CreateEditForm';
import { useParams } from 'react-router-dom';

// Here we will need to move form out in it's own component.
const AdminEditPostPage = (props) => {
	const { editPost } = props;
	const { id } = useParams();
	// alert(id);

	let postAPI = `https://jsonplaceholder.typicode.com/posts/${id}`;
	
	// let post = {};



	const [post, setPost] = useState({id: '', title: '', content: ''});


	useEffect(() => {
		fetch(postAPI)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        // posts = data;
        // console.log('posts', posts);

        // setPosts(data);
        console.log(data);
        // post = data;

        const { id, title, body } = data; 

        setPost({id, title, content: body});
      });	
	}, []);

	

	// Fetch info for this post.
	return post.id ? (
		<div class="create-post-page border">
		{alert(post.id)}
			<div>
			    <div>Post Id {id}</div>
				<CreateEditForm post={post} editPost={editPost} />
			</div>
		</div>
	) : 'Fetching Post Data';
}

export default AdminEditPostPage;