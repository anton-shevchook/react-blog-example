/*
	This file defines Admin Page Component.
*/
import React from 'react';
import {
	Switch,
	Link,
	Route,
	useRouteMatch
} from 'react-router-dom';
import AdminPostsPage from './AdminPostsPage';
import AdminCreatePostPage from './AdminCreatePostPage';
import AdminEditPostPage from './AdminEditPostPage';

// Here need to think on proper props format to pass from App to AdminPostsPage
// Need to write proper CSS for sidebar and content columns.
const AdminPage = ({ posts, removePost, editPost, createPost }) => {
	let { path, url } = useRouteMatch();
	const herokuTest = 'itsHerokuTest';
	return ( 
		<main class="admin-page container">
			<div className="admin-sidebar border">
				<ul>
					<li>
						<Link to={`${url}`}>Main Admin</Link>
					</li>
					<li>
						<Link to={`${url}/posts`}>Posts</Link>
					</li>
					<li>
						<Link to={`${url}/create-post`}>Create Post</Link>
					</li>
					
				</ul>
			</div>

			<Switch>
				<Route exact path={path}>
					<h3>This is main admin page.</h3>
				</Route>
				<Route path={`${path}/posts`}>
					<AdminPostsPage posts={posts} removePost={removePost}  />
				</Route>
				<Route path={`${path}/create-post`}>
					<AdminCreatePostPage createPost={createPost} />
				</Route>
				<Route path={`${path}/edit-post/:id`}>
					<AdminEditPostPage editPost={editPost} />
				</Route>
			</Switch>
		</main>
	);
}

export default AdminPage;