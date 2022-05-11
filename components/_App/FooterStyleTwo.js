// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';

const FooterStyleTwo = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area footer-style-two">
                <div className="container">
                <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-6">
                <div className="footerdez-a">
                <h2 className="lightcolor">WE WOULD LOVE TO HEAR FROM YOU.</h2>
                <p className="mt10 darkcolor">Feel free to reach out if you want to collaborate with us, or simply give us a call.</p>
                <div className="contactinfo mt30">
                <Link href="mailto:marketing@seopromarvel.com">
                <a>marketing@seopromarvel.com<span>→</span></a>
                </Link >
                <Link href="tel:+14692527019"> 
                <a >+14692527019<span>→</span></a>
                </Link>
                
                </div>
                </div>
                </div>
                <div className="col-lg-7 col-sm-7">
                <div className="row fttlnks">
                <div className="col-lg-4 col-sm-12">
                <h5 className="lightcolor">OUR ADDRESS</h5>
                <h4></h4>
                <p className="darkcolor">1341 W. Mockingbird Lane, Suite 600W, Dallas, Texas 75247</p>
                </div>
                <div className="col-lg-8 col-sm-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8737981799577!2d-96.86802128533459!3d32.822108688993076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9c6812deb201%3A0x50b35a1c2b9c994b!2s1341%20W%20Mockingbird%20Ln%2C%20Dallas%2C%20TX%2075247%2C%20USA!5e0!3m2!1sen!2sbs!4v1645651240297!5m2!1sen!2sbs" width="100%" height="250" ></iframe>
                </div>
                </div>
                </div>
                </div>

                    
                    <div className="copyright-area light-color">
                        <p>Copyright &copy; {currentYear} <strong>SEO Pro Marvel</strong>. All Rights Reserved by <a href="https://seopromarvel.com/" target="_blank">SEO Pro Marvel</a></p>
                    </div>
                </div>
            </div>
              
    <div className="niwaxofcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample">
      <div className="offcanvas-body">
        <div className="cbtn animation">
          <div className="btnclose"> <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
        </div>
        <div className="getintouchblock mt30">
            <span className="text-radius text-light text-animation bg-b">Special offer</span>
          <h4>Claim free web maintenance now</h4>
          <p className="mt10">Signup to get more information</p>
          <div className="media mt15">
            <div className="icondive"><img src="images/icons/call.svg" alt="icon" /></div>
            <div className="media-body getintouchinfo">
              <a href="tel:"><span></span></a>
            </div>
          </div>
          <div className="media mt15">
            <div className="icondive"><img src="images/icons/whatsapp.svg" alt="icon" /></div>
            <div className="media-body getintouchinfo">
              <a href="https://wa.me/14692527019" target="_blank"><span></span></a>
            </div>
          </div>
          <div className="media mt15">
            <div className="icondive"><img src="images/icons/mail.svg" alt="icon" /></div>
            <div className="media-body getintouchinfo">
              <a href="mailto:"><span>Online Support</span></a>
            </div>
          </div>
          <div className="media mt15">
            <div className="icondive"><img src="images/icons/map.svg" alt="icon" /></div>
            <div className="media-body getintouchinfo">
              <a href="https://goo.gl/maps/eKnw9XUzGhwbKTo98" target="_blank">1341 W. Mockingbird Lane, Suite 600W, Dallas, Texas 75247<span>Visit Our Office</span></a>
            </div>
          </div>
        </div>
        <div className="form-block sidebarform">
          <h4>Request A Quote</h4>
          <form id="contactForm" data-bs-toggle="validator" className="shake mt20" action="dl_thanks.php" method="get">
            <div className="row">
              <div className="form-group col-sm-12">
                <input type="text"  id="name" name="cn" placeholder="Enter name" required data-error="Please fill Out" />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group col-sm-12">
                <input type="email"  id="email" name="em" placeholder="Enter email" required />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-12">
                <input type="text" id="mobile" name="pn" placeholder="Enter mobile" required data-error="Please fill Out" />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group col-sm-12">
                <input type="text" name="url" className="" placeholder="Enter Website" required data-error="Please fill Out"/>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="form-group">
              <textarea id="message" name="msg" rows="5" placeholder="Enter your message" required></textarea>
              <div className="help-block with-errors"></div>
            </div>
            <button type="submit" id="form-submit" className="btn lnk btn-main bg-btn right-pop">Submit <span className="circle"></span></button>
            <div id="msgSubmit" className="h3 text-center hidden"></div>
            <div className="clearfix"></div>
          </form>
        </div>
        
 
      </div>
    </div>
    
        </>
    );
}

export default FooterStyleTwo;