import React, {Component} from 'react';
class Newsletter extends Component{
    render(){
        return(
            <section className="newsletter-sec">
            <div className="container">
              <h1>Smart marketing <br/>starts here</h1>
              <h4>Join over 150,000 marketing managers who get our best digital marketing insights, strategies and tips delivered straight to their inbox.</h4>
              <form action="" method="">
                <div className="service-form-box">
                  <div className="form-group mb-2">
                    <input type="email" name="" className="form-control" placeholder="ENTER YOUR WORK EMAIL" />
                  </div>
                  <div className="submit-btn mb-2">
                    <button type="submit" className="btn arrow-btn red-btn">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        )
    }
}
export default Newsletter;