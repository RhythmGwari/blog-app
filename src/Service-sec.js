import React, {Component} from 'react';
class Service extends Component{
    render(){
        return(
            <section className="service-contact-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-contact-left">
              <h3>Get in touch/ also schedule a call/meet </h3>
              <h4><span>Schedule a call or meeting</span> with our digital marketing expert for <span>FREE consultation</span>.</h4>
              <a  href="http://design.ukwebsitedesigncompany.co.uk/logicsoft-newdesign-2020/html/blog.html?" className="btn arrow-btn red-btn">Schedule Consultation</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-contact-form">
              <h4><span>If you want us to prepare a digital marketing scope for your business,</span> please fill in the necessary information required for us to proceed.</h4>
              <form action="" method="">
                <div className="service-form-box">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label>Service Category</label>
                    <select className="form-control">
                      <option>Select</option>
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>Digital Marketing</option>
                      <option>Graphic Design</option>
                      <option>IT Services</option>
                      <option>Mobile Apps</option>
                      <option>White Label Solutions</option>
                      <option>Outsourcing</option>
                      <option>Printing</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <select className="form-control">
                      <option>Morning</option>
                      <option>Noon</option>
                      <option>Evening</option>
                    </select>
                  </div>
                </div>
                <div className="submit-btn text-right">
                  <button type="submit" className="btn arrow-btn red-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
        )
    }
}
export default Service;