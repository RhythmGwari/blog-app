import React, {Component} from 'react';
class Navbar extends Component{
    render(){
        return(
            <header className="header">
            <div className="main-header">
              <div className="container">
                <nav className="navbar navbar-expand-lg">
                  {/* <!-- Brand --> */}
                  <a className="navbar-brand" href="blog.html"><img src="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/img/blog-logo.png" alt="" /></a>
      
                  {/* <!-- Toggler/collapsibe Button --> */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="fa fa-bars"></span>
                  </button>
      
                  {/* <!-- Navbar links --> */}
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="blogging-tools.html">Blogging Tools</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link"  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?">Google</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="internet-marketing.html">Internet Marketing</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="services.html">Our Services</a>
                        <div className="sub-menu-toggle"></div>
                        <ul className="sub-menu">
                          <li><a href="web-design.html">Web Design</a></li>
                          <li><a href="web-development.html">Web Development</a></li>
                          <li><a href="digital-marketing.html">Digital Marketing</a></li>
                          <li><a href="graphic-design.html">Graphic Design</a></li>
                          <li><a href="it-services.html">IT Services</a></li>
                          <li><a href="mobile-apps.html">Mobile Apps</a></li>
                          <li><a href="white-label-solutions.html">White Label Solutions</a></li>
                          <li><a href="outsourcing.html">Outsourcing</a></li>
                          <li><a href="printing.html">Printing</a></li>
                          <li><a href="consultation.html">Consultation</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="advertise.html">Advertise With Us</a>
                      </li>
                    </ul>
                    <div className="header-btn">
                      <ul>
                        <li>
                          <a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?" className="btn request-btn">Request a Free quote</a>
                        </li>
                        <li>
                          <a href="contact-us.html" className="btn">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
        )
    }
}
export default Navbar;