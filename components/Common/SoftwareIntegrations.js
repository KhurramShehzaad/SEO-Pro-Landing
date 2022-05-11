import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

const SoftwareIntegrations = () => {
    return (
        <>
            <div className="software-integrations-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="software-integrations-content">
                                <span className="sub-title">DISCUSS WITH OUR TEAM</span>
                                <h2>Want More Leads and More Customers to Grow Your Revenue?</h2>

                                <div className="form-block wow slideInLeft" data-wow-delay=".6s">
<form action="dl_thanks.php" method="get" name="feedback-form">
<div className="fieldsets row">
<div className="col-md-6"><input type="text" placeholder="Full Name" name="cn" required /></div>
<div className="col-md-6"><input type="email" placeholder="Email Address" name="em" required /></div>
</div>
<div className="fieldsets row">
<div className="col-md-6"><input type="number" placeholder="Contact Number" name="pn" required /></div>
<div className="col-md-6"><input type="text" placeholder="Website" name="url" required /></div>
</div>
<div className="fieldsets"><textarea placeholder="Message" name="msg"></textarea></div>

<div className="fieldsets mt20"> <button type="submit" name="submit" className="lnk btn-main bg-btn leads-form">Submit <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></button> </div>
<p className="trm"><i className="fas fa-lock"></i>We hate spam, and we respect your privacy.</p>
</form>
</div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="software-integrations-list">
                                    <img src="/images/shape/bg-shape2.png" alt="bg-shape" />

                                    <ul>
                                        <li>
                                            <img src="/images/software-integrations/adwords.png" width="64" height="64" className="atlassian" alt="AdWords" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/google.png" width="64" height="64" className="skype" alt="Google" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/w3c.png" className="gdrive" alt="W3C" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/brainstorm.png" className="slack" alt="Creative" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/pagespeed.png" className="jira" alt="pagespeed" />
                                        </li>
                                        <li>
                                            <img src="/images/software-integrations/frame.png" className="frame" with="80" height="101" alt="frame" />
                                        </li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="shape6">
                    <img src="/images/shape/shape5.png" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default SoftwareIntegrations;
