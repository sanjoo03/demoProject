import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
                    <Card style={{marginBottom:'20px'}}>
                        <div className="postImageWrapper">
                            <img src={require('../../../PhotoBlog/rose.jpg')} alt=""/>
                        </div>
                        <div style={{textAlign:"center"}}></div>
                    </Card>
                    <Card style={{marginBottom:'20px'}}>

                    </Card>
                </div>
   )

 }

export default RecentPosts