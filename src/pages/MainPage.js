/*
	Main Page
*/

import React from 'react';
import './test.scss';
import laptopImg from '../img/laptop.jpg';

const MainPage = () => {
	return (
		<main class="container border">
			<div class="content-col border">
				<h1>Hello Folks</h1>
				<p class="test">
					Welcome to this small and simple React Blog Project
					
				</p>
				<div class="btn-container border">
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