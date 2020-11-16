/*
	This is a page component,
	that displays Admin, Posts page.
*/

import React from 'react';
import { 
	Link,
	useRouteMatch,
	useLocation,
	useHistory
} from 'react-router-dom';

// Here need to create Table component.
const AdminPostsPage = ({posts, removePost}) => {
	const { path, url } = useRouteMatch();
	let location = useLocation();
	console.log(url);
	console.log({location});
	console.log('Posts in Admin Page', posts);


	const history = useHistory();

	const postsRow = posts.map((post, index) => {
		return (
			<tr key={index} id={index}>
				<td>{post.title}</td>
				<td>{post.body}</td>
				<td>Generic date: 20.20.20</td>
				<td>
					<button onClick={() => removePost(post.id)}>Delete</button>
					<button onClick={() => alert(post.id)}>Edit</button>
					<Link to={`edit-post/${post.id}`}>Link</Link>
					<button onClick={() => history.push(`edit-post/${post.id}`)}>Go To</button>	
				</td>
			</tr>
		);
	});
	console.log('Posts Row', postsRow);
	return (
		<div class="admin-content border">
		<div>{path}</div>
			<div className=" border">
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web .
				</p>
				<table>
					<thead>
						<tr>
							<th>Post Title</th>
							<th>Excerpt</th>
							<th>Date Created</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{postsRow}
					</tbody>
				</table>
			</div>
		</div>


	);
}

export default AdminPostsPage;