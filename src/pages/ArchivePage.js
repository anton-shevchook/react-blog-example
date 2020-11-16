/*
	This file defines Archive Page Component.
*/

import React from 'react';

const ArchivePage = () => {

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

	return ( 
		<main class="post-archive-page container border">
			<div class="post-container border">
				<ul class="post-list border">
					<li class="post-list-item border">
						<div class="post-feature-image">
							<img class="" src="https://via.placeholder.com/150"/>	
						</div>
						<div class="post-text border">
							<h3>Post Title</h3>
							<p class="border">
								It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
					</li>
					<li class="post-list-item border">
						<div class="post-feature-image">
							<img class="" src="https://via.placeholder.com/150"/>	
						</div>
						<div class="post-text border">
							<h3>Post Title</h3>
							<p class="border">
								It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
					</li>
					<li class="post-list-item border">
						<div class="post-feature-image">
							<img class="" src="https://via.placeholder.com/150"/>	
						</div>
						<div class="post-text border">
							<h3>Post Title</h3>
							<p class="border">
								It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
					</li>
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