import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import MainBanner from '@/components/HomeDemo1/MainBanner';
import Features from '@/components/HomeDemo1/Features';
import TypesofSEOServices from '@/components/HomeDemo1/TypesofSEOServices';
import WebsitePlatforms from '@/components/HomeDemo1/WebsitePlatforms';
import BestAppEver from '@/components/HomeDemo1/BestAppEver';
import KeyFeatures from '@/components/HomeDemo1/KeyFeatures';
import AppProgressStyle1 from '@/components/Common/AppProgressStyle1';
import AppDownloadStyle1 from '@/components/Common/AppDownloadStyle1';
import AppScreenshotsStyle1 from '@/components/AppScreenshots/AppScreenshotsStyle1';
import SoftwareIntegrations from '@/components/Common/SoftwareIntegrations';
import PricingPlanStyle2 from '@/components/PricingPlan/PricingPlanStyle2';
import ClientFeedbackStyle1 from '@/components/Feedbacks/ClientFeedbackStyle1';
import FreeTrialStyle1 from '@/components/Common/FreeTrialStyle1';
import FooterStyleTwo from '@/components/_App/FooterStyleTwo';





const IndexPage = () => {
    return (
        <>
            <NavbarStyleTwo />

            <MainBanner />
    <BestAppEver />
    <TypesofSEOServices />
            <Features />
            <WebsitePlatforms />

<PricingPlanStyle2 />


<ClientFeedbackStyle1 />



            <AppProgressStyle1 />
<KeyFeatures />


            <AppScreenshotsStyle1 />

            <SoftwareIntegrations />







            <FooterStyleTwo />
          

        </>
    )
}

export default IndexPage;
