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
import Zendesk from "react-zendesk";


const setting = {
    color: {
      theme: "#000"
    },
    launcher: {
      chatLabel: {
        "en-US": "Need Help"
      }
    },
    contactForm: {
      fields: [
        { id: "description", prefill: { "*": "My pre-filled description" } }
      ]
    }
  };
  const ZENDESK_KEY = "49c50e3e-ddcf-4b92-9ad2-23a3413ec38c";
  
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
            <Zendesk defer zendeskKey={ZENDESK_KEY} {...setting} />

        </>
    )
}

export default IndexPage;
