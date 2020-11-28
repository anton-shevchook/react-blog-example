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

    let fakePosts = [
      {title: 1, body: 2},
      {title: 1, body: 2},
    ]

    let [posts, setPosts] = useState([]);

    useEffect(() => {
      const fakeApiUrl = 'https://jsonplaceholder.typicode.com/posts';
      
      fetch(fakeApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });

    }, []);


    const removePost = (postId) => {
  
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
              <LoginPage />
            </Route>

            <PrivateRoute path="/admin">
              <AdminPage posts={posts} removePost={removePost} editPost={editPost} createPost={createPost} />
            </PrivateRoute>

            <Route path="/post-archive">
              <ArchivePage posts={posts} />
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
            <Route path="/posts/:id">
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
