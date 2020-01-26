import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar'; 
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json';


const SideImage=props=>{
    return(
        <div className="" style={{height: props.height+'px'}}>
        <img src={props.src} alt=""/>
    </div> 
    )
}

const ImageGallary=props=>(
    <div className="gallaryPost" style={props.gallaryStyle}>
                   
                    <section style={{widht:'70%'}}>
                        <div className="mainImageWrapper">
                            <img src={require('../../PhotoBlog/'+props.imagesArray[0])} alt=""/>
                        </div>
                    </section>
                    <section className="sideimageWrapper" style={{widht:'30%'}}>
                        <SideImage
                            height={props.sideImageHeight}
                            src={require('../../PhotoBlog/'+props.imagesArray[4])}
                        />
                        <SideImage
                            height={props.sideImageHeight}
                            src={require('../../PhotoBlog/'+props.imagesArray[2])}
                        />
                        <SideImage
                            height={props.sideImageHeight}
                            src={require('../../PhotoBlog/'+props.imagesArray[3])}
                        />
                    </section>
                </div>
)

const Home= props => {

    const gallaryHeight=450;
    const gallaryStyle={
        height:gallaryHeight+'px',
        overflow :'hidden'
    }

    const sideImageHeight=gallaryHeight/3;
    
    const imgArray=blogData.data.map(post=>post.blogImage)
    console.log(imgArray)
    return (
        <div>
            <Card>
                <ImageGallary 
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    gallaryStyle={gallaryStyle}
                    imagesArray={imgArray}
                />
                                
            </Card> 
            <section className="homeContainer">
                <RecentPosts style={{width:'70%'}}/>
                <Sidebar />
            </section>



        </div>
    )
}

export default Home;