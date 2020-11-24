/*
	This file defines Single Post page component.
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostPage = () => {

	const [post, setPost] = useState({id: '', title: '', body: ''});

	let { id } = useParams();

	useEffect(() => {
      const fakeApiUrl = 'https://jsonplaceholder.typicode.com/posts/' + id;
      
      fetch(fakeApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // posts = data;
        
        const { id: postId, title, body } = data;
        setPost({id: postId, title: title, body: body});
        console.log('Fetched post', post);
      });

      // setPosts(fakePosts);
    }, []);


	return (
		<main class="single-post-page container border">
		{JSON.stringify(post)}
			<div class="post-image border">
				<img src={"https://picsum.photos/id/"+ post.id +"/450"} alt="" />
			</div>
			<div class="post-content">
				<h1>{post.title}</h1>
				<p class="post-text">
					{post.body}
				</p>
				<hr />
				<p>
					{post.body}
				</p>
			</div>
		</main>
	);
}

export default SinglePostPage;