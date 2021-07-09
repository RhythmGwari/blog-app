import React, {Component} from "react";
class SideBarBlog extends Component{
    render(){
        return(
            <div className="col-lg-4">
                <div className="blog-sidebar">
                    <div className="blog-sidebar-box">
                        <h4>As featured on Linkio Top SEO Agencies</h4>
                        <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/linkio.png" alt="" />
                    </div>
                    <div className="blog-sidebar-box">
                        <h4>As featured on Feedspot Top 100 UK Marketing Blogs</h4>
                        <img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/feedspot.png" alt="" />
                    </div>
                    <div className="blog-sidebar-list">
                        <h3>Recent Blog</h3>
                        <ul>
                        <li><a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?">Top Software Development Companies in London – Compare Quotes</a></li>
                        <li><a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?">What is Web Application Development – A Beginner’s Guide</a></li>
                        <li><a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?">The Ultimate Guide to Outsource Web Development</a></li>
                        <li><a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?">Web Developer vs Software Developer – What is the Difference?</a></li>
                        <li><a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?">The Ultimate Guide to Micro Influencers in the UK 2020</a> </li>
                        </ul>
                    </div>
                    <div className="blog-sidebar-list">
                        <h3>Main Services</h3>
                        <ul>
                            <li><a href="web-design.html">Web Design</a></li>
                            <li><a href="web-development.html">Web Development</a></li>
                            <li><a href="digital-marketing.html">Digital Marketing</a></li>
                            <li><a href="seo-marketing.html">SEO</a></li>
                            <li><a href="influencer-marketing.html">Influencer Marketing</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default SideBarBlog;