import React from 'react';
import dynamic from 'next/dynamic';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: false,
    loop: true,
    margin: 25,
    dots: true,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        },
        1600: {
            items: 3
        }
    }
};

const ClientFeedbackStyle1 = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="feedback-area ptb-100 bg-gradient1">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">REVIEWS</span>
                        <h2>Client Testimonials</h2>
                        <p ><strong>Check our customers success stories.</strong></p>
                    </div>

                    {display ? <OwlCarousel
                        className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-feedback-box">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                <i className="fas fa-quote-left size-40"></i>

                                    <div className="title">
                                    <LazyLoadImage src="images/partner/trustpilot.png" width="130" height="67" alt="trustpilot"  />
                                    </div>
                                </div>
                            </div>
                            <p>"I have been working with them for 6 months now. SEO was a relatively new subject for me. Oscar guided me with the process and gave me realistic expectations. My business was a startup when I began with these guys but I must say its headed in the right direction now. You don't have to think twice before taking their services."</p>
                            <div className="rating d-flex align-items-center justify-content-between">
                                <h5>Veronica Bowman</h5>
                                <div>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-box">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-quote-left size-40"></i>
                                    <div className="title">
                                  <LazyLoadImage src="images/partner/trustpilot.png" width="130" height="67" alt="trustpilot"  />
                                    </div>
                                </div>
                            </div>
                            <p>"So far I've seen improvements in traffic. They continue to show work like Blogs and other which I believe is what is needed to improve rankings so the costs have started to result in sales. I'm all about organic and I think what they are doing is helplng."</p>
                            <div className="rating d-flex align-items-center justify-content-between">
                                <h5>Maverick</h5>
                                <div>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-box">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-quote-left size-40"></i>
                                    <div className="title">
                                      <LazyLoadImage src="images/partner/trustpilot.png" width="130" height="67" alt="trustpilot"  />
                                    </div>
                                </div>
                            </div>
                            <p>"Seopromarvel was willing to work with me even though my business is small. It was difficult to find a professional company that could give the time and attention necessary at reasonable rates. They always treat me with the utmost respect and urgency. I have been using them for 3 months and have already seen a difference in the response rate from local customers. I have every confidence that they will get me where I need to be on Google and are a pleasure to work with."</p>
                            <div className="rating d-flex align-items-center justify-content-between">
                                <h5>HAK</h5>
                                <div>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-line"></i>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-box">
                            <div className="client-info">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-quote-left size-40"></i>
                                    <div className="title">
                                        
                                        <LazyLoadImage src="images/partner/trustpilot.png" width="130" height="67" alt="trustpilot"  />
    
                                    </div>
                                </div>
                            </div>
                            <p>"We were apprehensive about hiring another SEO company, as we have had poor experiences in the past. We have been satisfied and reassured with every step during the process thus far with SEO Pro Marvel. We have worked with Oscar directly and we could not recommend him, his team, and their services enough. If you are a company needing help, guidance, and an addition to your team in regards to your SEO, look no further."</p>
                            <div className="rating d-flex align-items-center justify-content-between">
                                <h5>Jeffrey Slomovitz</h5>
                                <div>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-half-line"></i>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default ClientFeedbackStyle1;
