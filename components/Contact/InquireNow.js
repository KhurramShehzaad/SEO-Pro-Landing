import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const OrderNowOrange = () => {
  const [isActive, setActive] = React.useState(false);

 const handleToggle = () => {
   setActive(!isActive);
 };

    return (
        <>

          <button className="default-btn btn-orange" onClick={handleToggle}>Inquire Now</button>
          <LazyLoadComponent>
          <div className={isActive ? "modal fade show" : "modal fade "} id="exampleModal">
  <div className="modal-dialog form-modal">
    <div className="modal-content">
      <div className="modal-header">

        <button type="button" className="btn-close" onClick={handleToggle}></button>
      </div>
      <div className="modal-body">
      <div  className="contact-area pt-4  ">
          <div className="container">
              <div className="section-title">
                  <h2>SEO Agency For Startup, Midsize And Enterprise Companies</h2>
                  <p>Audit Your Site - More Sales, More Leads, More Happy Customers...</p>
              </div>

              <div className="col-md-12">
              <div className="contact-form ">
                  <form id="contactForm" action="https://seopromarvel.com/server.php" method="get" >
                      <div className="row">

                          <div className="col-md-6 col-sm-6">
                              <div className="form-group">
                                  <input type="text" name="cn" className="form-control" id="name" required placeholder="Full Name" />
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                              <div className="form-group">
                                  <input type="email" name="em" className="form-control" id="email" required placeholder="Email Address" />
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                              <div className="form-group">
                                  <input type="text" name="pn" className="form-control" id="phone_number" required placeholder="Phone No" />
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                              <div className="form-group">
                                  <input type="text" name="url" className="form-control" id="msg_subject" placeholder="Enter Website" required />
                              </div>
                          </div>
                          <div className="col-md-12 col-sm-12">
                              <div className="form-group">
                                  <textarea name="message" id="message" className="form-control" cols="30" rows="3" required  placeholder="Message"></textarea>
                              </div>
                          </div>
                          <div className="col-md-12 col-sm-12 mb-4">
                              <button type="submit" className="default-btn btn-orange mb-4 ">
                                  <i className='bx bx-paper-plane'></i> Submit
                              </button>
                          </div>
                      </div>
                  </form>
              </div>

              </div>


          </div>


      </div>
      </div>

    </div>
  </div>
</div></LazyLoadComponent>

        </>
    )
}

export default OrderNowOrange;
