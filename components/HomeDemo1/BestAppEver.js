import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import TrustedPartners from '@/components/HomeDemo1/TrustedPartners'
import dynamic from 'next/dynamic';
import ContactForm from '@/components/Contact/ContactForm'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const shoot = () => {
  javascript:$zopim.livechat.window.show();

}
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const BestAppEver = () => {
  const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <section className="dg-service2 pad-tb" id="services">
      <div className="container">

        <div className="-cta-btn mt70">
          <div className="free-cta-title v-center " >
            <p>Hire a <span>Personal SEO Consultant</span></p>

             <button onClick={shoot} className="default-btn btn-orange">Hire Consultant<i className="fas fa-chevron-right fa-icon"></i></button>
          </div>
        </div>
      </div>
    </section>
        {/* Trusted Partners Component */}
                              <TrustedPartners />
            <div className="features-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="features-content">
                            <span className="text-effect-1">WE GRAB THE MOST CONVERTIBLE SEARCHES</span>
                                <h2>Based on Scientifically-Proven Data and Extensive Research</h2>
                                <p>When it comes to your organic SEO, we don't rely on guesses, assumptions, or hopes. Every time, our Google Optimization Professionals show it technically and prove it logically.</p>
                                <p>Certain SEO specialists still use old and untested tactics for website optimization. Our SEO professionals thoroughly analyze your company, website, and client base before creating a specific plan based on factual information to guarantee the maximum result.</p>
                                <p><strong>For more information on how our monthly or long-term SEO services may help you expand your business, don't hesitate to get in touch with us now!</strong></p>



                                <div className="btn-box">
                                      <ContactForm />

                                    <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>


                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="features-image text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <LazyLoadImage src="images/app/CONVERTIBLE.svg" alt="app-img" />
                                </ScrollAnimation>

                                <div className="shape">
                                    <LazyLoadImage className="shape3" src="images/shape/shape2.png" alt="shape" />
                                    <LazyLoadImage className="shape4" src="images/shape/shape3.png" alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-shape1">
                    <LazyLoadImage src="images/shape/bg-shape1.png" alt="bg-shape" />
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

export default BestAppEver;
