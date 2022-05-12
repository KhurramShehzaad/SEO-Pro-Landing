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


const WebsitePlatforms = () => {

    return (
        <>
            <div className="screenshots-area bg-gradient3 ptb-100" id="platforms">
                <div className="container">
                    <div className="section-title ">

                        <h2><span className="text-radius text-light text-animation bg-b">Website Platforms </span> We Specialize In</h2>
                    </div>

                    <div className="screenshots-tabs">
                        <Tabs>
                            <TabList>
                                <Tab>

                                    WordPress SEO
                                </Tab>
                                <Tab>

                                    Joomla SEO
                                </Tab>
                                <Tab>

                                    Squarespace Business
                                </Tab>
                                <Tab>

                                    Drupal SEO
                                </Tab>
                                <Tab>

                                    Shopify SEO
                                </Tab>
                                <Tab>

                                     Weebly SEO
                                </Tab>
                                <Tab>

                                    Magento SEO
                                </Tab>
                                <Tab>

                                    Wix SEO
                                </Tab>
                            </TabList>

                            <TabPanel>
                            <div className="row justify-content-center">
                            <div className="col-md-8 text-left">
                             <h3 className="text-radius text-light text-animation bg-b mb-3">
                              <LazyLoadImage src="images/logo/3.png" alt="WordPress" width="122" />
                              SEO</h3>
                               <p className="mb-3">
                               WordPress website traffic is our strength with our high quality SEO solutions. We have worked with thousands of clients, helping them grow their traffic and sales online through WordPress SEO.
                               </p>
                              <ContactForm />
                              <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
                                </div>
                                <div className="col-md-4">
                                <LazyLoadImage src="images/platform/wordpress.svg" className="lazy" />
                                </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="row justify-content-center">
                            <div className="col-md-8 text-left">
                             <h3 className="text-radius text-light text-animation bg-b mb-3">
                              <LazyLoadImage src="images/logo/6.png" alt="Joomla" width="122" />
                              SEO</h3>
                               <p className="mb-3">
                               We offer Joomla SEO and Joomla website optimization services to assist our clients in building their businesses and generating new leads. Page speed optimization is vital for optimal search engine rankings. Our SEO experts will enable you to reach your objectives by providing high-quality Joomla SEO services websites.
                               </p>
                              <ContactForm />
                              <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
                                </div>
                                <div className="col-md-4">
                                <LazyLoadImage src="images/platform/joomla-img.svg" className="lazy" />
                                </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                            <div className="col-md-8 text-left">
                             <h3 className="text-radius text-light text-animation bg-b mb-3">
                              <LazyLoadImage src="images/logo/1.png" alt="Squarespace" width="122" />
                              SEO</h3>
                               <p className="mb-3">
                               Squarespace automatically generates SEO-friendly pages with static URLs for every product category. But still you need experts to take care of multiple other factors.
                               </p>
                              <ContactForm />
                              <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
                                </div>
                                <div className="col-md-4">
                                <LazyLoadImage src="images/platform/squarespace.svg" className="lazy" />
                                </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                            <div className="col-md-8 text-left">
                             <h3 className="text-radius text-light text-animation bg-b mb-3">
                              <LazyLoadImage src="images/logo/4.png" alt="Drupal" width="122" />
                              SEO</h3>
                               <p className="mb-3">
                               We engage in Drupal SEO. We'll help ensure that your page on the Drupal website is viewed if it's vital to your organization.
                               </p>
                              <ContactForm />
                              <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
                                </div>
                                <div className="col-md-4">
                                <LazyLoadImage src="images/platform/drupal.svg" className="lazy" />
                                </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                            <div className="col-md-8 text-left">
                             <h3 className="text-radius text-light text-animation bg-b mb-3">
                              <LazyLoadImage src="images/logo/2.png" alt="Shopify" width="122" />
                              SEO</h3>
                               <p className="mb-3">
                               Even with Shopify's drag-and-drop UI, striking out now in today's crowded e-commerce market is really not straightforward. Therefore choose our services to get the best Shopify SEO.
                               </p>
                             <ContactForm />
                              <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
                                </div>
                                <div className="col-md-4">
                                <LazyLoadImage src="images/platform/shopify.svg" className="lazy" />
                                </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                            <div className="col-md-8 text-left">
                             <h3 className="text-radius text-light text-animation bg-b mb-3">
                              <LazyLoadImage src="images/logo/7.png" alt="Weebly" width="122" />
                              SEO</h3>
                               <p className="mb-3">
                               It's critical to know your SEO end goal while creating a Weebly website. Our Weebly SEO Experts will optimize it as you want it to work and do the best SEO marketing for your future and growth.
                               </p>
                              <ContactForm />
                              <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
                                </div>
                                <div className="col-md-4">
                                <LazyLoadImage src="images/platform/weebly.svg" className="lazy" />
                                </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                            <div className="col-md-8 text-left">
                             <h3 className="text-radius text-light text-animation bg-b mb-3">
                              <LazyLoadImage src="images/logo/5.png" alt="Magento" width="122" />
                              SEO</h3>
                               <p className="mb-3">
                               Magento excels at SEO. It is a site with the functionality and programming required for heavy traffic. Alliance Technologies involves providing your e-commerce store on the internet.
                               </p>
                              <ContactForm />
                              <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
                                </div>
                                <div className="col-md-4">
                                <LazyLoadImage src="images/platform/Magento.svg" className="lazy" />
                                </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                            <div className="row justify-content-center">
                            <div className="col-md-8 text-left">
                             <h3 className="text-radius text-light text-animation bg-b mb-3">
                              <LazyLoadImage src="images/logo/8.png" alt="Wix" width="122" />
                              SEO</h3>
                               <p className="mb-3">
                               A good percentage of users on internet start of by using Wix as a platform to build their websites. Wix has the ability to allow users to create HTML5 desktop and mobile sites through user friendly online drag and drop features. We specialize in implementing best SEO practices on this platform and rank our clients higher on google SERPs.
                               </p>
                              <ContactForm />
                              <button className="default-btn btn-orange " onClick={shoot}>Live Chat</button>
                                </div>
                                <div className="col-md-4">
                                <LazyLoadImage src="images/platform/seo-img.svg" className="lazy" />
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

export default WebsitePlatforms;
