import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: false,
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    autoplayHoverPause: false,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 2
        },
        450: {
            items: 3
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
};

const TrustedPartners = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="trusted-by">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-12 companytime">
                        <p>10 Years* <span>Industry Experience</span></p>
                    </div>

                    <div className="col-lg-9 col-md-12">
                        {display ? <OwlCarousel
                            className="trusted-by-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/house.svg" alt="Real Estate" />
                                <h6>Real Estate</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                              <img src="images/icons/travel-case.svg" alt="Tour & Travels" />
                                <h6>Tour & Travels</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/video-tutorials.svg" alt="Education" />
                                <h6>Education</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                              <img src="images/icons/taxi.svg" alt="Transport" />
                                <h6>Transport</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/event.svg" alt="Event" />
                                <h6>Event</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/smartphone.svg" alt="Real Estate" />
                                <h6>eCommerce</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/joystick.svg" alt="Real Estate" />
                                <h6>Game</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/healthcare.svg" alt="Real Estate" />
                                <h6>Healthcare</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/money-growth.svg" alt="Real Estate" />
                                <h6>Finance</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/baker.svg" alt="Restaurant" />
                                <h6>Restaurant</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/mobile-app.svg" alt="On-Demand" />
                                <h6>On-Demand</h6>
                                </div>
                            </div>
                            <div className="item">
                            <div className="industry-workfors text-center">
                                <img src="images/icons/groceries.svg" alt="Grocery" />
                                <h6>Grocery</h6>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default TrustedPartners;
