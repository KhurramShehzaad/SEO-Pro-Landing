// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';
import Script from 'next/script'

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

    
    <Script
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
    __html: `

    window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?4N09pK5EDVD29oYXjL1iCm9b3lMMEMWc";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

$zopim(function() {
$zopim.livechat.window.show();
});`,
    }}
    />
        </>
    );
}

export default FooterStyleTwo;
