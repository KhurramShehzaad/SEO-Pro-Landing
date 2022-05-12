import React from 'react'
import {
    Tab,
    Tabs,
    TabList,
    TabPanel,
    resetIdCounter
} from 'react-tabs';
resetIdCounter();
import Link from 'next/link';
import ContactForm from '@/components/Contact/ContactForm'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const shoot = () => {
  javascript:$zopim.livechat.window.show();

}
const TypesofSEOServices = () => {

    return (
        <>
            <div className="screenshots-area bg-gradient3 ptb-100" id="seo-services">
                <div className="container">
                    <div className="section-title ">

                        <h2>Types of <span className="text-radius text-light text-animation bg-b">SEO Services</span> We Offer</h2>
                    </div>

                    <div className="screenshots-tabs">
                        <Tabs>
                            <TabList>
                                <Tab>

                                    On-page SEO
                                </Tab>
                                <Tab>

                                    Off-page SEO
                                </Tab>
                                <Tab>

                                    Google My Business
                                </Tab>
                                <Tab>

                                    Enterprise SEO
                                </Tab>
                                <Tab>

                                    Ecommerce SEO
                                </Tab>
                                <Tab>

                                     Local SEO
                                </Tab>
                                <Tab>

                                    International SEO
                                </Tab>
                                <Tab>

                                    Small Business SEO
                                </Tab>
                            </TabList>

                            <TabPanel>
                            <div className="row justify-content-center">
                <div className="col-md-6 ">


                <LazyLoadImage  src="images/types/Small-Business-SEO.svg" className="lazy"   />
            </div>
            <div className="col-md-6  text-left">
                <h3 className="text-radius text-light text-animation bg-b mb-3">On-page SEO </h3>
            <p className="mb-3">This recognition is immediately triggered by optimizing your website's on-page pages. Next, begin increasing the visits to your website, getting leads, and increasing your sales by making sure that Google knows that you are there. All this and more is offered by SEO Pro Marvel's vast web-based optimization services.</p>
            <div className="row">
                <div className="col-lg-6 col-md-12"><ul className="list-ul ul-check">


<li><i className="ri-check-line"></i>	Image alt text. </li>
<li><i className="ri-check-line"></i>	Internal linking structures</li>
<li><i className="ri-check-line"></i>	Correct usage of Keyword Density</li>
<li><i className="ri-check-line"></i>	HTML headings (H1-H6 tags)</li>


<li><i className="ri-check-line"></i>	Schema markup (featured snippet optimization)</li>

            </ul>

            </div>
            <div className="col-lg-6 col-md-12">
                <ul className="list-ul ul-check">
                <li><i className="ri-check-line"></i>		URL structure</li>
                <li><i className="ri-check-line"></i>		Title tags & Meta tags</li>
                <li><i className="ri-check-line"></i>		On-page copy, images, and videos </li>
<li><i className="ri-check-line"></i>		Meta descriptions and title tags</li>


            </ul>
            </div>
            </div>
            <div className="btn-box">
           <ContactForm />

        <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
          </div>

            </div>
           </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="row justify-content-center">
                <div className="col-md-6 ">

                <LazyLoadImage  src="images/types/off-page.svg" className="lazy" />
            </div>
            <div className="col-md-6 text-left">
                <h3 className="text-radius text-light text-animation bg-b mb-3">Off-page SEO </h3>
            <p className="mb-3">Do you spend a lot of money on your site to make it stand out? You put in a lot of work, but you receive enough visits. Don't hesitate to contact SEO Pro Marvel and let us use our off-page SEO solutions to boost your company's ranking.</p>
            <div className="row">
                <div className="col-lg-6 col-md-12"><ul className="list-ul ul-check">


<li><i className="ri-check-line"></i>	Backlink Profile Building, Custom link building yields positive results</li>
<li><i className="ri-check-line"></i>	Blogger OutReach</li>
<li><i className="ri-check-line"></i>	SEO lead Generation</li>
<li><i className="ri-check-line"></i>	Local Citations</li>


<li><i className="ri-check-line"></i>	Guest Blogging</li>
<li><i className="ri-check-line"></i>	GMB Optimization</li>

            </ul>

            </div>

            </div>
            <div className="btn-box">
           <ContactForm />
          <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
          </div>

            </div>
           </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                <div className="col-md-6 ">

                <LazyLoadImage  src="images/types/Google-My-Business.svg" className="lazy" />
            </div>
            <div className="col-md-6 text-left">
                <h3 className="text-radius text-light text-animation bg-b mb-3">Google My Business (GMB)</h3>
            <p className="mb-3">Get our services to add your brand to Google Maps. You must want to increase your sales. Not to worry; we know the perplexing concerns. GMB is a technique that will definitely work. However, you may be missing out on GMB. With Google My Business, you can have your brand featured on the Google Map and expect a daily flow of clients.</p>
            <div className="row">
                <div className="col-lg-6 col-md-12"><ul className="list-ul ul-check">


<li><i className="ri-check-line"></i>Market Growth</li>
<li><i className="ri-check-line"></i>	Better Affiliations</li>
<li><i className="ri-check-line"></i>	Stress-free Update</li>


            </ul>

            </div>

            </div>
            <div className="btn-box">
           <ContactForm />
          <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
          </div>

            </div>
           </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                <div className="col-md-6">

                <LazyLoadImage  src="images/types/enterprise-seo.svg" className="lazy" />
            </div>
            <div className="col-md-6 text-left">
                <h3 className="text-radius text-light text-animation bg-b mb-3">Enterprise SEO </h3>
            <p className="mb-3">Poor SEO services won't be sufficient to enhance a corporate website. You'll need a large-scale corporate SEO agency. SEO Pro Marvel has the capabilities for Enterprise SEO.</p>
            <div className="row">
                <div className="col-lg-6 col-md-12"><ul className="list-ul ul-check">


<li><i className="ri-check-line"></i>	Scaleable Enterprise SEO Strategy</li>
<li><i className="ri-check-line"></i>	A reliable Enterprise SEO Agency</li>
<li><i className="ri-check-line"></i>	Adaptable Search Engine Optimization.</li>

            </ul>

            </div>

            </div>
            <div className="btn-box">
           <ContactForm />
          <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
          </div>

            </div>
           </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                <div className="col-md-6">

                <LazyLoadImage  src="images/types/ecommerce-seo.svg" className="lazy" />
            </div>
            <div className="col-md-6 text-left">
                <h3 className="text-radius text-light text-animation bg-b mb-3">Ecommerce SEO </h3>
            <p className="mb-3">Ecommerce SEO requires SEO professionals who perfectly understand the platforms available today and produce the best results in such high competition. Our experts offer you multidimensional services on these platforms:</p>
            <div className="row">
                <div className="col-lg-6 col-md-12"><ul className="list-ul ul-check">


<li><i className="ri-check-line"></i>	Shopify SEO</li>
<li><i className="ri-check-line"></i>	Woo-commerce SEO</li>
<li><i className="ri-check-line"></i>	Big-commerce SEO</li>
<li><i className="ri-check-line"></i>	Magento SEO</li>

            </ul>

            </div>

            </div>
            <div className="btn-box">
           <ContactForm />
          <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
          </div>

            </div>
           </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                <div className="col-md-6">

                <LazyLoadImage  src="images/types/local-seo.svg" className="lazy" />
            </div>
            <div className="col-md-6 text-left">
                <h3 className="text-radius text-light text-animation bg-b mb-3">Local SEO </h3>
            <p className="mb-3">Around 50% of online queries are local. Your clients are seeking online. Can you effectively reach them? SEO Pro Marvel can help you turn online traffic into foot traffic that generates cash.</p>
            <div className="row">
                <div className="col-lg-6 col-md-12"><ul className="list-ul ul-check">


<li><i className="ri-check-line"></i>	Latest local SEO Techniques </li>
<li><i className="ri-check-line"></i>	Driving Local Trafic on Your Website</li>
<li><i className="ri-check-line"></i>	Local GMB Optimization</li>


            </ul>

            </div>

            </div>
            <div className="btn-box">
           <ContactForm />
          <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
          </div>

            </div>
           </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                <div className="col-md-6">

                <LazyLoadImage  src="images/types/international-seo.svg" className="lazy" />
            </div>
            <div className="col-md-6 text-left">
                <h3 className="text-radius text-light text-animation bg-b mb-3">International SEO</h3>
            <p className="mb-3">Are you ready to go international? Maybe. But can you reach a global audience? Our bilingual and international SEO strategies can reach a worldwide audience. Fill out the form to connect.</p>
            <div className="row">
                <div className="col-lg-6 col-md-12"><ul className="list-ul ul-check">


<li><i className="ri-check-line"></i>	International Keyword research </li>
<li><i className="ri-check-line"></i>	Impeccable content generation</li>
<li><i className="ri-check-line"></i>	Outsource on a global level</li>

            </ul>

            </div>

            </div>
            <div className="btn-box">
           <ContactForm />
          <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
          </div>

            </div>
           </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                <div className="col-md-6">

                <LazyLoadImage  src="images/types/Small-Business-SEO.svg" className="lazy" />
            </div>
            <div className="col-md-6 text-left">
                <h3 className="text-radius text-light text-animation bg-b mb-3">Small Business SEO </h3>
            <p className="mb-3">Substandard SEO services can't optimize an enterprise-level website. Instead, you need a large-scale business SEO agency. SEO Pro Marvel has the resources and capability for small and big business SEO.</p>
            <div className="row">
                <div className="col-lg-6 col-md-12"><ul className="list-ul ul-check">


<li><i className="ri-check-line"></i>	High-quality Content = SEO content </li>
<li><i className="ri-check-line"></i>	Exceptional Small business SEO</li>
<li><i className="ri-check-line"></i>	Multidimensional SEO content Strategies.</li>


            </ul>

            </div>

            </div>
            <div className="btn-box">
           <ContactForm />
          <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
          </div>

            </div>
           </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TypesofSEOServices;
