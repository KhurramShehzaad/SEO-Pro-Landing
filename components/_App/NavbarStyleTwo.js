// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss

import React from "react";

import Link from '@/utils/ActiveLink';
import dynamic from 'next/dynamic';
import FreeWebAnalysis from '../Contact/FreeWebAnalysis';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const NavbarStyleTwo = () => {
  const [isActive, setActive] = React.useState(false);

 const handleToggle = () => {
   setActive(!isActive);
 };
  // Popup Video
const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
      setIsOpen(!isOpen);
  }
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="texap-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light bg-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="images/logo-light.svg" alt="logo" width="136" height="55" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#home" >
                                            <a  className="nav-link">
                                                Home
                                            </a>
                                        </Link>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="#seo-services">
                                            <a  className=" nav-link">
                                                Services
                                            </a>
                                        </Link>


                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#pricing">
                                            <a  className=" nav-link">
                                                Price
                                            </a>
                                        </Link>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="#trust">
                                            <a  className=" nav-link">
                                                Testimonials
                                            </a>
                                        </Link>


                                    </li>




                                </ul>
                            </div>

                            <div className="others-options niwaxbtnvideo">

                                <button className="default-btn btn-blue " onClick={handleToggle}>Request a Quote</button>
                                  
                                <FreeWebAnalysis />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <LazyLoadComponent>
            <div className={isActive ? "niwaxofcanvas offcanvas offcanvas-end show" : " niwaxofcanvas offcanvas offcanvas-end "} aria-modal="true" role="dialog" id="offcanvasExample">
              <div className="offcanvas-body">
                <div className="cbtn animation">
                  <div className="btnclose">
                  <button type="button" className="btn-close text-reset" onClick={handleToggle}></button></div>
                </div>
                <div className="form-block sidebarform">

                  <span className="text-radius text-light text-animation bg-b">Special offer</span>
                <h4>Claim free web maintenance now</h4>
                <p className="mt10">Signup to get more information</p>
                  <form id="contactForm" className="shake mt20" action="https://seopromarvel.com/server.php" method="get">
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <input type="text"  id="name" name="cn" placeholder="Enter name" required />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group col-sm-12">
                        <input type="email"  id="email" name="em" placeholder="Enter email" required />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <input type="text" id="mobile" name="pn" placeholder="Enter mobile" required  />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="form-group col-sm-12">
                        <input type="text" name="url" className="" placeholder="Enter Website" required />
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
                <div className="getintouchblock mt30">
<h4 className="mb-4">Request A Quote</h4>
                  <div className="media mt15">
                    <div className="icondive"><img src="images/icons/call.svg" alt="icon" /></div>
                    <div className="media-body getintouchinfo">
                      <a href="tel:+14692527019">+14692527019<span></span></a>
                    </div>
                  </div>
                  <div className="media mt15">
                    <div className="icondive"><img src="images/icons/whatsapp.svg" alt="icon" /></div>
                    <div className="media-body getintouchinfo">
                      <a href="https://wa.me/14692527019" target="_blank">+14692527019<span></span></a>
                    </div>
                  </div>
                  <div className="media mt15">
                    <div className="icondive"><img src="images/icons/mail.svg" alt="icon" /></div>
                    <div className="media-body getintouchinfo">
                      <a href="mailto:marketing@seopromarvel.com">marketing@seopromarvel.com<span>Online Support</span></a>
                    </div>
                  </div>
                  <div className="media mt15">
                    <div className="icondive"><img src="images/icons/map.svg" alt="icon" /></div>
                    <div className="media-body getintouchinfo">
                      <a href="https://goo.gl/maps/eKnw9XUzGhwbKTo98" target="_blank">1341 W. Mockingbird Lane, Suite 600W, Dallas, Texas 75247<span>Visit Our Office</span></a>
                    </div>
                  </div>
                </div>



              </div>
            </div>
            </LazyLoadComponent>
            <ModalVideo
    channel='custom'
    isOpen={!isOpen}
    videoId='https://www.seopromarvel.com/assets/SEOrevisedvideo.mp4'
    url='/contact'
    onClose={() => setIsOpen(!isOpen)}
/>
        </>
    );
}

export default NavbarStyleTwo;
