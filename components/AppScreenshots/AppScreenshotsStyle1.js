import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: false,
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
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const AppScreenshotsStyle1 = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="screenshots-area bg-color ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">WHAT OUR CLIENTS SAY ABOUT US.</span>
                        <h2>Over 1200+ Satisfied Clients and Growing</h2>
                    </div>

                    {display ? <OwlCarousel
                        className="screenshots-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-screenshot-item top">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Keyword Report</h2>
<p>We research keywords related to your industry, service, area, target audience, and rivals.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Keyword Report</h2>
<p>We research keywords related to your industry, service, area, target audience, and rivals.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Keyword Report</h2>
<p>We research keywords related to your industry, service, area, target audience, and rivals.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Keyword Report</h2>
<p>We research keywords related to your industry, service, area, target audience, and rivals.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Keyword Report</h2>
<p>We research keywords related to your industry, service, area, target audience, and rivals.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Keyword Report</h2>
<p>We research keywords related to your industry, service, area, target audience, and rivals.</p>
</div></div></div>
</div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default AppScreenshotsStyle1;
