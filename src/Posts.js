import React from 'react';
import './App.css';
const Posts = ({posts, loading}) =>{
    if(loading){
        return(
            <div className="row">
            {posts.map(post => (
                <div className="col-12">
                    <div class="spinner-border text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>   
            ))}
         </div>
            
        )
    }
    return(
        <div className="row">        
            <div class="archive text-center mb-4">
                <h1 class="archive-heading">Archived Posts</h1>
            </div>
            {posts.map(post => (
                <div className="col-lg-4 col-md-6" key={post.id}>
                    <div className="blog-list-box">
                        <div className="blog-list-img">
                        <a href="single-blog.html"><img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-list-2.png" alt=""  /></a>
                        </div>
                        <h3><a href="single-blog.html">{post.title}</a></h3>
                        <p className="blog-desc">{post.body}</p>
                        <a href="single-blog.html" className="btn btn-white arrow-btn">Read more</a>
                        <div className="blog-list-author">
                            <div className="blog-author-img">
                                <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/author.png"  alt="" />
                            </div>
                            <div className="blog-author-name">
                                <h4><span>Author : </span><a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?">Sam Singh</a></h4>
                            </div>
                        </div>
                    </div>
                </div>   
            ))}
        </div>
    )
}
export default Posts