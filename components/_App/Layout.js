import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Script from 'next/script'
import ZenDeskChat from '@goranefbl/react-zendesk-chat';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, [])

    return(
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>SEO Pro Marvel</title>

            </Head>

            {children}

            {//loader ? <Preloader /> : null
            }

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            <ZenDeskChat
    appID="4N09pK5EDVD29oYXjL1iCm9b3lMMEMWc"

    offlineMsg="Leave us a message"
    buttonID="js-livechat-open"
    alwaysShow
/>
        </>
    );
}

export default Layout;
