import React from 'react';
import dynamic from 'next/dynamic';
import ContactForm from '@/components/Contact/ContactForm'

const Features = () => {

    return (
        <>
            <div className="features-area pt-75 pb-75 bg-gradient1">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="whychooseniwax v-center">
                        <div className="niwaxawardrow1">
                <div className="awardbgwithtext">
                  <img src="images/icons/moz-badge.png" alt="MOZ" className="lazy wow slideInUp" width="150" height="150" />

                </div>
                <div className="awardbgwithtext">
                  <img src="images/icons/semrush.png" alt="SE Mrushh" className="lazy wow slideInUp "  width="150" height="150" />

                </div>
                <div className="awardbgwithtext">
                  <img src="images/icons/ahref.png" alt="ahref" className="lazy wow slideInUp" width="150" height="150" />

                </div>
              </div>
              <div className="niwaxawardrow2 text-center">
                <h2>We Have A Lot Of <span className="text-radius text-light text-animation bg-b">Reasons</span></h2>
                <h4 className="mt10 text-effect-1">Why should you choose us?</h4>
                <p className="mt20">First of all, you should choose us because you searched "Optimization Experts Near Me" and found us. This is an example of how people will easily find your business on google. </p>
                <p className="mt10">Active engagement with our clients has been a part of our SEO solutions for years. SEO Audit, PPC, SMM, Organic SEO, and Off-site Optimization are just a  few of our SEO marketing firm services.</p>
                <p className="mt10">Whether you're a start-up or a shark, we're here to serve. We are committed to building long-term relationships with all of our customers, and we are always here for them whenever they have questions or need assistance. So please get in touch with us if you'd like any further information.</p>
                <div className="pairofbtn mt40">
                  <ContactForm />
                  <a href="#" className="btnwithiconside d-flex gap10 v-center">
                    <img src="images/icons/whatsapp.svg" width="42" height="42" alt="whatsapp" />
                    <div> <span>Or - Just Give Us A Call:</span>+14692527019 </div>
                  </a>
                </div>
              </div>
              <div className="niwaxawardrow1">
                <div className="awardbgwithtext">
                  <img src="images/icons/alexa.png" alt="alexa"  className="lazy wow slideInUp"  width="150" height="150" />

                </div>
                <div className="awardbgwithtext">
                  <img src="images/icons/gmb-badge.png" alt="GMB"  className="lazy wow slideInUp"  width="150" height="150" />

                </div>
                <div className="awardbgwithtext">
                  <img src="images/icons/analytics-badge.png" alt="Analytics"  className="lazy wow slideInUp"  width="150" height="150" />

                </div>
              </div>
            </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Features;
