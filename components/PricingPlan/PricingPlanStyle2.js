import React from 'react';
import Link from 'next/link'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const PricingPlanStyle2 = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
      setIsOpen(!isOpen);
  }
    return (
        <>
            <div className="pricing-area pt-100 pb-75" id="pricing">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">OUR SEO SERVICES PRICING</span>
                        <h2>Affordable SEO Packages That Fit Your Budget</h2>
                        <p>Pick from one of our plans, which are all fairly valued. Choices are available that are both detailed and cost-effective. In addition, our all SEO packages provide features that appeal to a wide range of customers.</p>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3>Startup Plan</h3>
                                    <p>Suitable for newly founded organizations or small startups with incubation</p>
                                </div>
                                <div className="pricingrate">
<div className="pricevalue">
<h2><sup>$</sup> 350.00</h2>
<span className="iner-prce">First Month Payment</span>
</div>
<div className="priceoffer">
<h2><span>$700.00</span></h2>
</div>
</div>



                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> <strong>Campaign Setup And Optimization</strong></li>
                                    <li><i className="ri-check-line"></i> Website Audit</li>
                                    <li><i className="ri-check-line"></i> Pages Optimized (10 pages)</li>
                                    <li><i className="ri-check-line"></i> 15 Selected Keywords Targeting</li>
                                    <li><i className="ri-check-line"></i> Keyword Research</li>
                                    <li><i className="ri-check-line"></i> Keyword Grouping</li>
                                    <li><i className="ri-check-line"></i>Keyword Mapping </li>
                                    <li><i className="ri-check-line"></i><strong> On-Page Optimization</strong></li>
                                    <li><i className="ri-check-line"></i> SEO Road Map</li>
                                    <li><i className="ri-check-line"></i> Blog Creation</li>
                                    <li><i className="ri-check-line"></i> Webpage Copywriting (3 pages, 350 words per page)</li>
                                    <li><i className="ri-check-line"></i> Title Tag Optimization (10 titles)</li>
                                    <li><i className="ri-check-line"></i> Meta Description Optimization (10 meta description)</li>
                                    <li><i className="ri-check-line"></i> Meta Keyword Optimization (10 meta keywords)</li>
                                    <li><i className="ri-check-line"></i> Domain Redirect Optimization (10 domain redirects)</li>
                                    <li><i className="ri-check-line"></i> xml Sitemap Optimization</li>
                                    <li><i className="ri-check-line"></i> Robots.txt Check</li>
                                    <li><i className="ri-check-line"></i> URL Rewrites (10 URL rewrites)</li>
                                    <li><i className="ri-check-line"></i> Broken Link Report</li>
                                    <li><i className="ri-check-line"></i> <strong> Rich Snippet Recommendations</strong></li>
                                    <li><i className="ri-check-line"></i> <strong> Initial Off-Page SEO</strong></li>
                                    <li><i className="ri-check-line"></i> Social Bookmarking</li>
                                    <li><i className="ri-check-line"></i> Slide Share Marketing</li>
                                    <li><i className="ri-check-line"></i> Forums/FAQ’s</li>
                                    <li><i className="ri-check-line"></i> Link Building</li>
                                    <li><i className="ri-check-line"></i> Directory Submission</li>
                                    <li><i className="ri-check-line"></i> Local Business Listings</li>
                                </ul>

                                <div className="priceodernow">
<div className="priceoderbtn">
<Link href="#">
    <a className="default-btn btn-blue" onClick={e => {e.preventDefault(); openModal()}}>Order Now</a>
</Link>
</div>
<div className="priceaskwithus">
<Link href="#pricing">
<a className="livechatbtn d-flex gap10 v-center"  onClick="function show()" >
<i className="fas fa-comment"></i>
<div><span>Click here to</span> Live Chat </div>
</a>
</Link>

</div>
</div>
<div className="pricingfooter mt30">
<div className="pfdiv1">$950 – Quarterly Plan </div>
<div className="pfdiv2">$300 – Recurring</div>
</div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box active">
                                <div className="title">
                                    <h3>Advanced Plan</h3>
                                    <p>For medium-sized, profitable companies that want to scale the corporate ladder.</p>
                                </div>
                                <div className="pricingrate">
<div className="pricevalue">
<h2><sup>$</sup> 700.00</h2>
<span className="iner-prce">First Month Payment</span>
</div>
<div className="priceoffer">
<h2><span>$1400.00</span></h2>
</div>
</div>



                                <ul className="features-list">
                                    <li><i className="ri-check-line"></i> <strong>Prior Analysis</strong></li>
                                    <li><i className="ri-check-line"></i> Business Analysis</li>
                                    <li><i className="ri-check-line"></i> Consumer Analysis</li>
                                    <li><i className="ri-check-line"></i> Competitor Analysis</li>
                                    <li><i className="ri-check-line"></i> 35 Selected Keywords Targeting</li>
                                    <li><i className="ri-check-line"></i> 15 Pages Keyword Targeted</li>
                                    <li><i className="ri-check-line"></i><strong> Webpage Optimization</strong></li>
                                    <li><i className="ri-check-line"></i>Meta Tags Creation</li>
                                    <li><i className="ri-check-line"></i> Keyword Optimization</li>
                                    <li><i className="ri-check-line"></i> Image Optimization</li>
                                    <li><i className="ri-check-line"></i> Inclusion of anchors</li>
                                    <li><i className="ri-check-line"></i> <strong>Tracking & Analysis</strong></li>
                                    <li><i className="ri-check-line"></i>Google Analytics Installation</li>
                                    <li><i className="ri-check-line"></i> Google Webmaster Installation</li>
                                    <li><i className="ri-check-line"></i> Call To Action Plan</li>
                                    <li><i className="ri-check-line"></i> Creation of Sitemaps</li>
                                    <li><i className="ri-check-line"></i> <strong>Reporting</strong></li>
                                    <li><i className="ri-check-line"></i> Monthly Reporting</li>
                                    <li><i className="ri-check-line"></i> Recommendation</li>
                                    <li><i className="ri-check-line"></i> Email Support</li>
                                    <li><i className="ri-check-line"></i> Phone Support</li>
                                    <li><i className="ri-check-line"></i> <strong> Off Page Optimization</strong></li>
                                    <li><i className="ri-check-line"></i> Social Bookmarking</li>
                                    <li><i className="ri-check-line"></i> Slide Share Marketing</li>
                                    <li><i className="ri-check-line"></i> Forums/FAQ’s</li>
                                    <li><i className="ri-check-line"></i> Link Building</li>
                                    <li><i className="ri-check-line"></i> Directory Submission</li>
                                    <li><i className="ri-check-line"></i> Local Business Listings</li>
                                </ul>

                                <div className="priceodernow">
<div className="priceoderbtn">
<Link href="#">
    <a className="default-btn btn-orange" onClick={e => {e.preventDefault(); openModal()}}>Order Now</a>
</Link>
</div>
<div className="priceaskwithus">
<Link href="#pricing">
<a className="livechatbtn d-flex gap10 v-center"  onClick="function show()" >
<i className="fas fa-comment"></i>
<div><span>Click here to</span> Live Chat </div>
</a>
</Link>
</div>
</div>
<div className="pricingfooter mt30">
<div className="pfdiv1">$1600 – Quarterly Plan </div>
<div className="pfdiv2">$450 – Recurring</div>
</div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box ">
                                <div className="title">
                                    <h3>Premium Plan</h3>
                                    <p>For pre-established companies seeking to retain their existence and claim the crown.</p>
                                </div>
                                <div className="pricingrate">
<div className="pricevalue">
<h2><sup>$</sup> 1200.00</h2>
<span className="iner-prce">First Month Payment</span>
</div>
<div className="priceoffer">
<h2><span>$2400.00</span></h2>
</div>
</div>



                                <ul className="features-list">
                                <li><i className="ri-check-line"></i> <strong>Prior Analysis</strong></li>
                                <li><i className="ri-check-line"></i> Business Analysis</li>
                                <li><i className="ri-check-line"></i> Consumer Analysis</li>
                                <li><i className="ri-check-line"></i> Competitor Analysis</li>
                                <li><i className="ri-check-line"></i> 60+ Selected Keywords Targeting</li>
                                <li><i className="ri-check-line"></i> 30 Pages Keyword Targeted</li>
                                <li><i className="ri-check-line"></i><strong> Webpage Optimization</strong></li>
                                <li><i className="ri-check-line"></i>Meta Tags Creation</li>
                                <li><i className="ri-check-line"></i> Keyword Optimization</li>
                                <li><i className="ri-check-line"></i> Image Optimization</li>
                                <li><i className="ri-check-line"></i> Inclusion of anchors Tags</li>
                                <li><i className="ri-check-line"></i> Inclusion of anchors Indexing Modifications</li>
                                <li><i className="ri-check-line"></i> <strong>Tracking & Analysis</strong></li>
                                <li><i className="ri-check-line"></i>Google Analytics Installation</li>
                                <li><i className="ri-check-line"></i> Google Webmaster Installation</li>
                                <li><i className="ri-check-line"></i> Call To Action Plan</li>
                                <li><i className="ri-check-line"></i> Creation of Sitemaps</li>
                                <li><i className="ri-check-line"></i> <strong>Reporting</strong></li>
                                <li><i className="ri-check-line"></i> Monthly Reporting</li>
                                <li><i className="ri-check-line"></i> Recommendation</li>
                                <li><i className="ri-check-line"></i> Email Support</li>
                                <li><i className="ri-check-line"></i> Phone Support</li>
                                <li><i className="ri-check-line"></i> <strong> Off Page Optimization</strong></li>
                                <li><i className="ri-check-line"></i> Social Bookmarking</li>
                                <li><i className="ri-check-line"></i> Slide Share Marketing</li>
                                <li><i className="ri-check-line"></i> Forums/FAQ’s</li>
                                <li><i className="ri-check-line"></i> Link Building</li>
                                <li><i className="ri-check-line"></i> Directory Submission</li>
                                <li><i className="ri-check-line"></i> Local Business Listings</li>
                                </ul>

                                <div className="priceodernow">
<div className="priceoderbtn">
<Link href="#">
    <a className="default-btn btn-blue" onClick={e => {e.preventDefault(); openModal()}}>Order Now</a>
</Link>
</div>
<div className="priceaskwithus">
<Link href="#pricing">
<a className="livechatbtn d-flex gap10 v-center"  onClick="function show()" >
<i className="fas fa-comment"></i>
<div><span>Click here to</span> Live Chat </div>
</a>
</Link>
</div>
</div>
<div className="pricingfooter mt30">
<div className="pfdiv1">$2600 – Quarterly Plan </div>
<div className="pfdiv2">$700 – Recurring</div>
</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape12">
                    <img src="/images/shape/shape11.png" alt="shape" />
                </div>
                <div className="shape13">
                    <img src="/images/shape/shape15.png" alt="shape" />
                </div>
            </div>
            {/* If you want to change the video need to update videoID */}
<ModalVideo
    channel='custom'
    isOpen={!isOpen}
    videoId='https://www.seopromarvel.com/assets/SEOrevisedvideo.mp4'
    url='/contact'
    onClose={() => setIsOpen(!isOpen)}
/>
        </>
    )
}

export default PricingPlanStyle2;
