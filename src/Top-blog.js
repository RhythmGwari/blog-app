import React, {Component} from 'react';
class TopBlog extends Component {
    render(){
        return(
            <div className="blog-list-top">
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="blog-list-top-img">
                    <a href="single-blog.html"><img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-list-1.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="blog-list-box">
                    <h3><a href="single-blog.html">Top Software Development Companies in London – Compare Quotes</a></h3>
                    <p className="blog-desc">Kickstart the growth of your business with a professionally designed website and software development services offered by Logicsofts, one of the leading software development</p>
                    <a href="single-blog.html" className="btn btn-white arrow-btn">Read more</a>
                    <div className="blog-list-author">
                        <div className="blog-author-img">
                        <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/author.png" alt=""  />
                        </div>
                        <div className="blog-author-name">
                        <h4><span>Author : </span><a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?">Sam Singh</a></h4>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default TopBlog