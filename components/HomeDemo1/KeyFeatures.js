import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
        <>
            <div className="features-area ptb-100 bg-F7F7FF">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">WE OFFER THE BEST MARKETING SEO SERVICES</span>
                        <h2>What's Different? Let's Have A Discussion!</h2>
                        <p><strong>Talk about your goals and discover the best SEO possibilities to succeed.</strong></p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon">
                                    <i className="ri-eye-line"></i>
                                </div>
                                <h3>Increase Visibility</h3>
                                <p>What are you doing on the 10th page? Your potential client is roaming or 1st page of google. Come, let us show you.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg2">
                                    <i className="ri-stack-line"></i>
                                </div>
                                <h3>Get More Customers</h3>
                                <p>An SEO marketing agency that assists you in getting more clients and sales.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg3">
                                    <i className="ri-leaf-line"></i>
                                </div>
                                <h3>Boost Sales</h3>
                                <p>Witness fresh leads, conversions, and visitors expand your company. WE DRIVE CUSTOMERS TO YOU!</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg4">
                                    <i className="ri-secure-payment-line"></i>
                                </div>
                                <h3>Authentic Partners</h3>
                                <p>We are not successful until you are. Our staff is dedicated to helping your company thrive through professional SEO services.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg5">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>Regular Reporting</h3>
                                <p>We present our progress, accomplishments, and plans to clients monthly. We will keep you informed at all times.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg6">
                                    <i className="ri-pie-chart-2-line"></i>
                                </div>
                                <h3>Unique Methods</h3>
                                <p>Our unique techniques have been time-tested and field-proven in the business for years.</p>
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                            <div className="view-more-box">
                            <div className="-cta-btn mt70"><div className="free-cta-title v-center ">
                            <p>Hire a <span>Personal SEO Consultant</span>
                            </p>
                            <Link href="#">
                                <a className="default-btn btn-orange">Inquire Now</a>
                            </Link>
                            </div></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;
