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
		</div>
	);
}

export default AdminCreatePostPage;