import React from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    nav: true,
    loop: false,
    margin: 25,
    dots: false,
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
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
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

                        <h2>Process</h2>
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
<h2>Web-Audit</h2>
<p>A comprehensive analysis is performed here, putting your website through several tests, discovering flaws, and providing advice.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Organize your content</h2>
<p>For each subject, our content marketing professionals consider your marketing goals, brand personality, and the primary audience.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Making Content</h2>
<p>Once you accept these subjects, our experts develop keyword-optimized copy utilizing reputable links and references.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner"><div className="timeline__content__wrap"><div className="timeline__content bg-gradient3">
<h2>Sponsored Material</h2>
<p>You get articles, blog posts, news releases, social media postings, infographics, and videos based on the SEO plan!</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner">
<div className="timeline__content__wrap">
<div className="timeline__content bg-gradient3">
<h2>Regular Worksheets</h2>
<p>This section highlights all posts, link building, competition research, and company profile listing entries made throughout the week.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner">
<div className="timeline__content__wrap">
<div className="timeline__content bg-gradient3">
<h2>Regular Ranking Sheets</h2>
<p>Submissions to competitions and corporate profile listings are also highlighted here.</p>
</div></div></div>
</div>
                        </div>
                        <div className="single-screenshot-item">
                        <div className="timeline__item" >
<div className="timeline__item__inner">
<div className="timeline__content__wrap">
<div className="timeline__content bg-gradient3">
<h2>Final Report</h2>
<p>We also offer you a detailed report summarizing your website's development and making suggestions for the following cycle.</p>
</div></div></div>
</div>
                        </div>
                    </OwlCarousel> : ''}
                    <span className='timeline-divider' ></span>
                </div>
            </div>
        </>
    )
}

export default AppScreenshotsStyle1;
