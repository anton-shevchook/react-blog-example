/*
	Main Page
*/

import React from 'react';
import './test.scss';
import laptopImg from '../img/laptop.jpg';

const MainPage = () => {
	return (
		<main class="home-page container">
			<div class="content-col">
				<h1>React Blog</h1>
				<p class="test">
					Hello folks! Welcome to this small and simple React Blog Project.
					<br />
					It serves as example of showing main features of React, Javascript project.
					<br />
					Here you would be able to find Pages as components, react router, authentication,
					fetching data from api, crud operations, and other things.
					
				</p>
				<div class="btn-container">
					<button class="call-to-action-btn">Check Posts</button>
				</div>
			</div>
			<div class="image-col">
				
				<img src={laptopImg} alt="laptop_image" width="550" />
			</div>
		</main>
	);
}

export default MainPage;