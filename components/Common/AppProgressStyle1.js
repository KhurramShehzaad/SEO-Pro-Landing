import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
const ModalVideos = dynamic(() => import('react-modal-video'), {
    ssr: false
})

const AppProgressStyle1 = () => {
  // Popup Video
const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
      setIsOpen(!isOpen);
  }
  const [isOpens, setIsOpens] = React.useState(true);
  const openModals = () => {
      setIsOpens(!isOpen);
  }
    return (
        <>
            <div className="app-progress-area ptb-100">
                <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-8 section-title">
<span className="sub-title">WHAT OUR CLIENTS SAY ABOUT US.</span>
<h2>Over 1200+ Satisfied Clients and Growing</h2>
                </div>

                </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="app-progress-image text-center row justify-content-center">
                            <div className="col-md-6">


  <div className="video-box review-vid-details">

  <img src="images/user/vreview.jpg" alt="app-img" />
  <div
      onClick={e => {e.preventDefault(); openModal()}}
      className="popup-custom "
       id="review-vid-details"
  >

      <i className="ri-play-line vid-ico"></i>
<p>Michaela &amp; Brandon</p>
  </div>
  </div>

                            </div>
                            <div className="col-md-6">


                                <div className="video-box review-vid-details">

                                <img src="images/user/reviewthumb.jpg" alt="app-img" />
                                <div
                                    onClick={e => {e.preventDefault(); openModals()}}
                                    className="popup-custom1 "
                                     id="review-vid-details"
                                >

                                    <i className="ri-play-line vid-ico"></i>
                              <p>Holly</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4 text-center">
                            <h4>Contact Us Now! And Let Us Handle Your Marketing Dilemmas!</h4>
                            <div className="btn-box mt-4 justify-content-center">
                           <a href="#"  className="default-btn btn-blue">Get In Touch With Us</a>
                          <a href="#" className="default-btn btn-orange">Live Chat</a>
                          </div>
                            </div>


                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="app-progress-content review-icons">


                                <p>SEO PRO Marvel has been providing affordable SEO and other digital Marketing Services for over a decade now. What makes us different from your average marketing agency is our client-oriented approach towards business. Not only do we focus on target-oriented SEO to generate timely results but we guarantee utmost satisfaction throughout the journey with us. Our marketing specialists keep themselves accustomed with new and updated marketing techniques to always stay above our competition. A mixture of all this creates an environment for our clients which allows them to focus on what really matters.</p>


                                <Link href="#">
                                    <a ><img src="images/partner/reviews-icon-1.png" width="130" alt="google reviews" /></a>
                                </Link>
                                <Link href="#">
                                    <a ><img src="images/partner/trustpilot.png" width="130"  alt="trustpilot" /></a>
                                </Link>
                                <Link href="#">
                                    <a ><img src="images/partner/reviews-icon-3.png" width="130" alt="reviews" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel='custom'
                isOpen={!isOpen}
                //videoId='https://www.seopromarvel.com/assets/SEOrevisedvideo.mp4'
                url='https://seopromarvel.com/seo-services/video-reviews.mp4'
                onClose={() => setIsOpen(!isOpen)}
            />
            <ModalVideos
                channel='custom'
                isOpen={!isOpens}
                //videoId='https://www.seopromarvel.com/assets/SEOrevisedvideo.mp4'
                url='https://seopromarvel.com/seo-services/new-review.mp4'
                onClose={() => setIsOpens(!isOpens)}
            />
        </>
    )
}

export default AppProgressStyle1;
