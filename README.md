This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hosted Project

https://nameless-bayou-60696.herokuapp.com/

## Project Intro

The idea of project is simple. It's a Blog!
There are posts(articles) on the blog. You can `create`, `read`, `update`, `delete` posts, (CRUD in short).

Why we chose to go with Blog and Posts?

Well, because idea could be related to any other application. If you will think that posts are products, you have not a blog, but an online store or any other application. (You can relate your application to this one!!) All other actions are the same, `create`, `read`, `update`, `delete`. So this CRUD principle is base of most application on the web.

## Thinking about our Blog

So let's start of of something basic. Our Blog can have:
- 3 simple, static html pages, Home, About, Contact.
- *Header and Footer* are present on every page.
- *Post Archive page*, which will have list view of posts.
- *Single Post view*, that will be showing detailed info of the post.
- *Admin page*, where user can create, update, delete posts.
- *Login page*, where user would be able to login as admin.

And that's it.

## Thinking in depth

Let's give more thought about previously mentioned parts of the blog.
- All the pages should be done in react components.
- Navigation between pages, Header, Footer should be done using React Router library.
- As we don't use our database, we will be retrieving posts from fake API and rendering their list in Post Archive page.
- On the Single Post view we will be retrieving info only about one particular post, also from API.
- Our CRUD actions will be implemented by creating state, state management functions, filling state with posts fetched from API and propagating them down to components via props.
- Admin page will have it's own nested navigation, done with React Router.
- Login page will be using authentication mechanism.

## Chosing our tools

Each feature should be done with additional specific technology, library or function. Based on what we previously mentioned, lets define what we need to use:

- React Router, for page navigation, redirects.
- Javascript Fetch API, for retrieving data from API.
- React Hooks and props for state management.
- Authentication Mechanism for login into system.

## Folder structure

![Folder Structure Image](project-description/folder-structure.JPG "Title")

## Project Phases

Having all that information, now we can divide our project into development phases. Each phase will be combination of Project Part we are creating and Technology(library) we are using for it.

### Phase #1: Page Components (technologies: React Components, React Router)

- Turning pages into components.
- Using React Router to navigate.
- Creating Header and Footer.

### Phase #2: List Post View, Single Post View (technologies: React Router Parameters)

List Item View and Single Item View - it's a concept where you have One page that
displays list of items(posts or products) with general details and another page displays single item but with more details. You can find it in any web application.

Todo
- Creating pages List Post View and Single Post View

	- [List Item View(in my case it's Archive Page)](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/ArchivePage.js)
	- [Single Item View](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/SinglePostPage.js)

- Set up Router parameters to handle id in routes 
in [App.js](https://github.com/anton-shevchook/react-blog-example/blob/master/src/App.js)

```
<Route path="/posts/:id">
    <SinglePostPage />
</Route>
```

- Add id to link in List Item View.
```
const postItems = posts.map((post, index) => {
		return (
			<li key={index} class="post-list-item border">
				<div class="post-feature-image">
					<img class="" src={"https://picsum.photos/id/"+ index +"/150"}/>	
				</div>
				<div class="post-text">
```
	`				<h3><Link to={"/posts/" + post.id}>{post.title}</Link></h3>`
```
					<p class="border">
						{post.body}
					</p>
				</div>
			</li>
		);
	});
```
- Grab id from url parameters in Single Item View.
```
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostPage = () => {
	let { id } = useParams();
```

This phase as whole, you can check more detailed in these files.
- [App.js](https://github.com/anton-shevchook/react-blog-example/blob/master/src/App.js)
- [List Item View(in my case it's Archive Page)](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/ArchivePage.js)
- [Single Item View](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/SinglePostPage.js)

### Phase #3: Creating State (technologies: Fetch API React Hooks, props)

State is place in your front end application where your data is stored. It's like an abstract storage, to where you go and perform different actions. Add, edit, remove things.

What we will do in this phase?
- Fetch data into our application from fake API. In - [App.js](https://github.com/anton-shevchook/react-blog-example/blob/master/src/App.js)
```
useEffect(() => {
  const fakeApiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  fetch(fakeApiUrl)
  .then((res) => res.json())
  .then((data) => {
    setPosts(data);
  });

 });
```
- Create State itself.
```
let [posts, setPosts] = useState([]);
```
- Propagate state data through props into lower components.
```
<Route path="/post-archive">
  <ArchivePage posts={posts} />
</Route>
```
- Turning data into HTML elements, rendering data. In [List Item View(in my case it's Archive Page)](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/ArchivePage.js)
```
const ArchivePage = ({posts}) => {

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
```
This phase as whole, you can check more detailed in these files.
- [App.js](https://github.com/anton-shevchook/react-blog-example/blob/master/src/App.js)
- [List Item View(in my case it's Archive Page)](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/ArchivePage.js)

### Phase #4: Admin Page and it's subpages (technologies: React Router, Nested Routes, subnavigation)

In this phase we will be adding Admin Page in our website, also implementing nested routing or subnavigation in another words.

Things we need to do:
- Creating [Admin page](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/AdminPage.js) with nested navigation for subpages.
- Creating [Admin Posts](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/AdminPostsPage.js) and [Admin Create Post](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/AdminCreatePostPage.js) subpages.
- Rendering posts data in admin table inside [Admin Posts Page](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/AdminPostsPage.js)
```
const postsRow = posts.map((post, index) => {
		return (
			<tr key={index} id={index}>
				<td><Link to={`edit-post/${post.id}`}>{post.title}</Link></td>
				<td>{post.body}</td>
				<td>Generic date: 20.20.20</td>
				<td>
					<button class="btn-action" onClick={() => removePost(post.id)}>Delete</button>
					<button class="btn-action" onClick={() => history.push(`edit-post/${post.id}`)}>Edit</button>	
				</td>
			</tr>
		);
	});
```
```
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
```
You can see full phase implemented in these files:
- [Admin Page](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/AdminPage.js)
- [Admin Posts Page](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/AdminPostsPage.js)
- [Admin Create Post Page](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/AdminCreatePostPage.js)

### Phase #5: Implementing CRUD operations (technologies: Javascript Array Methods, React Hooks)

CRUD is web development principle that stands for actions that we perform with data in our application. We Create, Read, Update, Delete our posts, products, users or anything else that is in our application.

Things we need to do:
- Implementing action delete, create, edit as functions in App.js
```
  const removePost = (postId) => {
  
      const newPosts = posts.filter((post, index) => {
        return post.id !== postId;
      });

      setPosts(newPosts, []);
    }
```

```
const createPost = (newPost) => {
  posts.push(newPost);
  setPosts(posts, []);
}
```

```
 const editPost = (postId, alteredPost) => {
	  const newPosts = posts.map((post, index) => {
	    if(post.id == postId){
	      return alteredPost;
	    }
	    return post;
	  });

	  setPosts(newPosts, []);
}
```
- Propagating those functions in props to child components where we actually will be using them.
In our AdminPostsPage and AdminCreatePost.
```
const AdminPostsPage = ({posts, removePost}) => {
	const { path, url } = useRouteMatch();
	let location = useLocation();

	const history = useHistory();

	const postsRow = posts.map((post, index) => {
		return (
			<tr key={index} id={index}>
				<td><Link to={`edit-post/${post.id}`}>{post.title}</Link></td>
				<td>{post.body}</td>
				<td>Generic date: 20.20.20</td>
				<td>
					<button class="btn-action" onClick={() => removePost(post.id)}>Delete</button>
					<button class="btn-action" onClick={() => history.push(`edit-post/${post.id}`)}>Edit</button>	
				</td>
			</tr>
		);
	});
```

```
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
```

- And finaly we are using createPost() function in a Form, where we create new Post.
[CreateEditForm.js](https://github.com/anton-shevchook/react-blog-example/blob/master/src/components/CreateEditForm.js)

### Phase #7: Creating Login Page (technologies: React Router, Authentication Mechanism)

- Creating Login Page with login form.
	- [Login Page](https://github.com/anton-shevchook/react-blog-example/blob/master/src/pages/LoginPage.js)
- Creating PrivateRoute component, that will be wrapper for our AdminPage.
Purpose of the PrivateRoute component is to check whether user is authenticated and based on that, render Admin or redirect to Login screen. Check [PrivateRoute component](https://github.com/anton-shevchook/react-blog-example/blob/master/src/components/PrivateRoute.js)

```
/*
	This file defines PrivateRoute component,
	that is used for Authentication.
*/
import React from 'react';
import {
	Route,
	Redirect
} from 'react-router-dom';
import auth from '../Authentication';

const PrivateRoute = ({ children, ...rest }) => {

	return ( 
		<Route
			{...rest}
			render={({location}) => 
				auth.isAuthenticated() ? (children)
				: (
					<Redirect
					 to={{ pathname: '/login', state: { from: location } }}
					/>
			)}
		/>
	);
}

export default PrivateRoute;
```

- Using React Router for Private Routes in [App.js](https://github.com/anton-shevchook/react-blog-example/blob/master/src/App.js)
```
<PrivateRoute path="/admin">
  <AdminPage posts={posts} removePost={removePost} editPost={editPost} createPost={createPost} />
</PrivateRoute>
```

- Implementing Authentication. We will have class that will be handling user authentication. Check [Authentication.js](https://github.com/anton-shevchook/react-blog-example/blob/master/src/Authentication.js) Our Login page will be using it's functions to authenticate user in system.
```
// import { useHistory, useLocation } from 'react-router-dom';

class Authentication {
	constructor() {
		this.authenticated = false;
	}

	login(cb, credentials) {
		const { login, password } = credentials;
		// let history = useHistory();
		// let location = useLocation();


		alert(window.location);

		if(login === 'admin' && password === 'admin') {
			alert('Valid');
			this.authenticated = true;	
			setTimeout(cb, 100); // fake async
		} else {
			alert('Please check your credentials and try again.');
		}
		
		
	}

	logout(cb) {
		this.authenticated = false;
		setTimeout(cb, 100);
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Authentication();
```
- Handling Login form. We will user our standart ways of handling changes and submit action in our form. Please check full file [CreateEditForm.js](https://github.com/anton-shevchook/react-blog-example/blob/master/src/components/CreateEditForm.js) for complete code view.
```
/*
	This File defines Create Edit Form Component.
*/

import React, { useState, useEffect } from 'react';
import { useInput } from '../utilities/utilities';

const CreateEditForm = (props) => {

	const { post = { title: '', content: '' }, editPost, createPost } = props;

	console.log('createPost: ', createPost);



	console.log({post});


	const [values, setValues] = useState(post);

	const { id, title, content } = values;

	console.log('comp values', {values});

	const initState = {
		title: '',
		content: ''
	};



	const handleChange = (e) => {
		console.log(`${e.target.name}: ${e.target.value}`);

		let { name, value } = e.target;

		setValues({
			...values,
			[name]: value
		});

	}

	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log('Sending post:', {post});

		if(id) {
			alert('Editting post');
			const post = {
				id,
				title,
				body: content
			};
			editPost(id, post);	
		} else {
			alert('Creating Post');
			const post = {
				title,
				body: content
			};
			createPost(post);
		}
		


	}

	if (props.id) {

	}

	return (
		<form action="" onSubmit={handleSubmit}>
			<div class="form-field">
				<label htmlFor="">Post Title</label>
				<input type="text" name="title" placeholder="Enter title" onChange={handleChange} value={values.title} />
			</div>
			<div class="form-field">
				<label htmlFor="">Post Content</label>
				<textarea name="content" id="" cols="30" rows="20" placeholder="Post Content" onChange={handleChange} value={content}>
				</textarea>
			</div>
			<div class="form-field">
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

export default CreateEditForm;
```