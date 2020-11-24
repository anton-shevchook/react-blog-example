/*
	This file defines Archive Page Component.
*/

import React from 'react';

import { Link } from 'react-router-dom';

const ArchivePage = ({posts}) => {

	/*
.post-archive-page {}

.post-archive-page .post-container {}

.post-archive-page .post-container .post-list {}

.post-archive-page .post-container .post-list li {}

.post-archive-page .post-container .post-list li .post-feature-image {}

.post-archive-page .post-container .post-list li .post-text {}

.post-archive-page .pagination-container {}

.post-archive-page .pagination-container .pagination-arrow {}
	*/

	const postItems = posts.map((post, index) => {
		return (
			<li key={index} class="post-list-item border">
				<div class="post-feature-image">
					<img class="" src={"https://picsum.photos/id/"+ index +"/150"}/>	
				</div>
				<div class="post-text">
					<h3><Link to={"/posts/" + post.id}>{post.title}</Link></h3>
					<p class="border">
						{post.body}
					</p>
				</div>
			</li>
		);
	});

	return ( 
		<main class="post-archive-page container border">
			<div class="post-container border">
				<ul class="post-list border">
					{postItems}
				</ul>
			</div>
			<div class="pagination-container">
				<a href="#" class="pagination-arrow">
					Previous
				</a>
				<a href="#" class="pagination-arrow">
					Next
				</a>
				</div>
		</main>
	);
}

export default ArchivePage;