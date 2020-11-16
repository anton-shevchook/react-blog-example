/*
	This file defines Admin Create Post Page component.
*/

import React from 'react';
import CreateEditForm from '../components/CreateEditForm';

// Here we will need to move form out in it's own component.
const AdminCreatePostPage = (props) => {
	const { createPost } = props;
	console.log('AdminCreatePostPage createPost:', createPost);
	return (
		<div class="create-post-page border">
			<div>
				<CreateEditForm createPost={createPost} />
			</div>
			<div class="form-container border">
				<form action="">
					<div class="form-field">
						<label htmlFor="feature-image">Feature Image</label>
						<input type="file" id="feature-image" name="feature-image" />
					</div>
					<div class="form-field">
						<label htmlFor="">Post Title</label>
						<input type="text" placeholder="Enter title" />
					</div>
					<div class="form-field">
						<label htmlFor="">Post Content</label>
						<textarea name="" id="" cols="30" rows="20" placeholder="Post Content">
						</textarea>
					</div>
					<div class="form-field">
						<input type="submit" value="Submit" />
					</div>
					<div class="form-field">
						<button>Cancel</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AdminCreatePostPage;