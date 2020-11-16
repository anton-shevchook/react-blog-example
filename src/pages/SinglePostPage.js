/*
	This file defines Single Post page component.
*/

import React from 'react';

const SinglePostPage = () => {

	return (
		<main class="single-post-page container border">
			<div class="post-image border">
				<img src="https://via.placeholder.com/450" alt="" />
			</div>
			<div class="post-content">
				<h1>Post Title</h1>
				<p class="post-text">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
				</p>
				<hr />
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
				</p>
			</div>
		</main>
	);
}

export default SinglePostPage;