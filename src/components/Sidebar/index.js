import React, {useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const[posts,setPosts]=useState([]);

  useEffect(()=>{
    const posts=blogPost.data;
    setPosts(posts);
  },[posts]);

  return(
    <div className="sidebar" style={{width:props.width}}>
      <Card style={{marginBottom:'20px', padding: '20px', boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src={require('../../PhotoBlog/a21.jpg')} alt="Author"/>
        </div>
        <div className="cardBody">
          <p className="personalBio">I am Sanjoy Say. I am a software developer who loves to do UI design</p>
        </div>
      </Card>

      <Card style={{marginBottom:'20px', padding: '20px', boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Social network</span>
        </div>
      </Card>

      <Card style={{marginBottom:'20px', padding: '20px', boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {
            posts.map(post=>{
              return(                
          <NavLink key={post.id} to={'/post/'+ post.id}>
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>              
              );
            })
          }
        </div>
      </Card>
    </div>
   )
 }

export default Sidebar