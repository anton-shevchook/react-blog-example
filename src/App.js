import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// Pages
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPostsPage from './pages/AdminPostsPage';
import ArchivePage from './pages/ArchivePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import SinglePostPage from './pages/SinglePostPage';

// Template
import Header from './components/Header';
import Footer from './components/Footer';

import PrivateRoute from './components/PrivateRoute';

import auth from './Authentication';

import logo from './logo.svg';
import './App.css';



function App() {
  // fetch('http://localhost:3001/post')
  //   .then(function(res) {return res.json();})
  //   .then(function(data) { console.log('data:', data); })
  //   .catch(function(error) {
  //     console.log('fail');
  //   });

    // fetch('http://localhost:3001/posts')
    // .then(function(res) {return res.json();})
    // .then(function(data) { console.log('data:', data); })
    // .catch(function(error) {
    //   console.log('fail');
    // });

    let fakePosts = [
      {title: 1, body: 2},
      {title: 1, body: 2},
    ]
    // let posts = []; 

    let [posts, setPosts] = useState([]);

    useEffect(() => {
      const fakeApiUrl = 'https://jsonplaceholder.typicode.com/posts';
      
      fetch(fakeApiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        // posts = data;
        // console.log('posts', posts);

        setPosts(data);
      });

      // setPosts(fakePosts);
    }, []);

    // setPosts(fakePosts);

    const removePost = (postId) => {
      /* Part 1
        Probably here we would need to send Delete request
        to server.
        And when it gets back with success, do remove
        it from UI
        or....Rerender page, do rerendering here...?!

        We also can add Quick Edit function here that will be updating
        small fields, or partly updating post.
      */
      const newPosts = posts.filter((post, index) => {
        return post.id !== postId;
      });

      setPosts(newPosts, []);
    }

    const editPost = (postId, alteredPost) => {
      const newPosts = posts.map((post, index) => {
        if(post.id == postId){
          return alteredPost;
        }
        return post;
      });

      setPosts(newPosts, []);
    }

    const createPost = (newPost) => {
      posts.push(newPost);
      setPosts(posts, []);
    }

  return (
  




    <div class="container-ver">
      {console.log('posts', posts)}
      <Router>
        <Header />
        <div class="container-ver">
          <Switch>
            <Route path="/login">
            {JSON.stringify(auth)}
              <LoginPage />
            </Route>

            <PrivateRoute path="/admin">
              <AdminPage posts={posts} removePost={removePost} editPost={editPost} createPost={createPost} />
            </PrivateRoute>

            <Route path="/post-archive">
              <ArchivePage />
            </Route>
            <Route path="/admin-posts-page">
              <AdminPostsPage posts={posts} removePost={removePost} />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/single-post">
              <SinglePostPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
            // <Route path="/">
            //   <MainPage />
            // </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
