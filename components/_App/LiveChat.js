import React from 'react'
import ZenDeskChat from '@goranefbl/react-zendesk-chat';
const shoot = () => {
  javascript:$zopim.livechat.window.show();
  
}

const LiveChat = () => {


    return(
        <>




<button onClick={shoot}>Take the shot!</button>
<button className="default-btn btn-orange " id="#js-livechat-open1">Live Chat</button>
            <ZenDeskChat
    appID="4N09pK5EDVD29oYXjL1iCm9b3lMMEMWc"
    buttonID="#js-livechat-open1"
alwaysShow
/>
        </>
    );
}

export default LiveChat;
