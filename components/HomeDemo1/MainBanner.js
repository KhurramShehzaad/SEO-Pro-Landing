import React, { useState, useEffect }  from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
import Typewriter from 'typewriter-effect'
import Script from 'next/script'
import dynamic from 'next/dynamic';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const shoot = () => {
  javascript:$zopim.livechat.window.show();

}
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
const MainBanner = () => {
  // Popup Video
const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
      setIsOpen(!isOpen);
  }


    return (

        <>

            <div className="main-banner-area" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="main-banner-content ">
                                <div className="content">
                                <span className="text-effect-1">Logical SEO Services Provider</span>
                                <h1 className="wow fadeIn mt20 mb30" >SEO Expert Company We Provide  <span className="typer" id="main" data-words="Competitor analysis, Keyword Research, On-page Audit, On-page Optimization, Off-page Optimization, GMB Optimization " data-delay="100" data-deletedelay="1000"></span> <span className="cursorx" data-owner="first-typer">|</span></h1>
                                <p className="wow fadeIn" >SEO Pro Marvel is a well-known company in the SEO industry that attracts new clients and leads to your website. Our SEO specialists keep themselves updated with new google optimization techniques with an ultimate focus on generating leads and revenue for our clients. We at SEO Pro Marvel not only acts as your SEO marketing team but as your branding team as well.</p>
                                <div className="video-box top">
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="video-btn popup-youtube"
                                >
                                    <i className="ri-play-line"></i>
                                </div>
                                </div>


                                    <div className="niwaxbtnvideo mt30">

                                    <button className="default-btn btn-orange " onClick={shoot} id="js-livechat-open">Get Started</button>

                                                      <div className="video-btn  d-flex v-center gap10">

                                                        <div className="title-hero col-sm-12">
                                                        <Link href="#">
                                                            <a className="default-btn btn-blue" onClick={e => {e.preventDefault(); openModal()}}>Click to find out why you are in the right place!</a>
                                                        </Link>

                                                        </div>
                                                      </div>
                                                    </div>
                                </div>

                                {/* Trusted Partners Component */}

                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 v-center">
                            <ScrollAnimation animateIn='fadeInUp' duration={2} animateOnce={true} initiallyVisible={true}>
                            <div className="form-block formcover shadow">
              <h3 className="text-center">
              <span className="text-radius text-light text-animation bg-a text-uppercase" >Special Limited Time Offer</span>
              </h3>
            <h5 className="pr-3 pl-3 text-center"> Claim free website maintenance now</h5>
            <p className="text-center">Signup to get more information</p>
            <form id="contactForm" action="https://seopromarvel.com/server.php" method="get" className="shake mt30">
              <div className="row">
                <div className="form-group col-sm-6">
                  <input type="text"  id="name" name="cn" placeholder="Enter name" required data-error="Please fill Out" />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-sm-6">
                  <input type="email"  id="email" name="em" placeholder="Enter email" required />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-6">
                  <input type="text" id="mobile"  name="pn" placeholder="Enter mobile" required data-error="Please fill Out" />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group col-sm-6">
                   <input type="text" name="url" className="" placeholder="Enter Website" required data-error="Please fill Out" />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="form-group">
                <textarea id="message" name="msg" rows="5" placeholder="Enter your message" required></textarea>
                <div className="help-block with-errors"></div>
              </div>
              <button type="submit" id="form-submit" className=" claim-form default-btn btn-blue col-md-12">Submit</button>
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              <div className="clearfix"></div>
            </form>
          </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                {/* Banner Images */}

                <div className="banner-shape1">
                    <LazyLoadImage src="images/shape/shape9.png" alt="image" />
                </div>
                <div className="banner-shape2">
                    <LazyLoadImage src="images/shape/shape7.png" alt="image" />
                </div>
                <div className="banner-shape3">
                    <LazyLoadImage src="images/shape/shape2.png" alt="image" />
                </div>
                <div className="banner-shape4">
                    <LazyLoadImage src="images/shape/shape10.png" alt="image" />
                </div>
                <div className="banner-shape5">
                    <LazyLoadImage src="images/shape/shape11.png" alt="image" />
                </div>
            </div> <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
 var Typer=function(element){this.element=element;var delim=element.dataset.delim||",";var words=element.dataset.words||"override these,sample typing";this.words=words.split(delim).filter((v)=>v);this.delay=element.dataset.delay||200;this.loop=element.dataset.loop||"true";if(this.loop==="false"){this.loop=1}
 this.deletedelay=element.dataset.deletedelay||element.dataset.deletedelay||800;this.progress={word:0,char:0,building:true,looped:0};this.typing=true;var colors=element.dataset.colors||"black";this.colors=colors.split(",");this.element.style.color=this.colors[0];this.colorIndex=0;this.doTyping();};Typer.prototype.start=function(){if(!this.typing){this.typing=true;this.doTyping();}};Typer.prototype.stop=function(){this.typing=false;};Typer.prototype.doTyping=function(){var e=this.element;var p=this.progress;var w=p.word;var c=p.char;var currentDisplay=[...this.words[w]].slice(0,c).join("");var atWordEnd;if(this.cursor){this.cursor.element.style.opacity="1";this.cursor.on=true;clearInterval(this.cursor.interval);this.cursor.interval=setInterval(()=>this.cursor.updateBlinkState(),400);}
 e.innerHTML=currentDisplay;if(p.building){atWordEnd=p.char===this.words[w].length;if(atWordEnd){p.building=false;}else{p.char+=1;}}else{if(p.char===0){p.building=true;p.word=(p.word+1)%this.words.length;this.colorIndex=(this.colorIndex+1)%this.colors.length;this.element.style.color=this.colors[this.colorIndex];}else{p.char-=1;}}
 if(p.word===this.words.length-1){p.looped+=1;}
 if(!p.building&&this.loop<=p.looped){this.typing=false;}
 setTimeout(()=>{if(this.typing){this.doTyping()};},atWordEnd?this.deletedelay:this.delay);};var Cursor=function(element){this.element=element;this.cursorDisplay=element.dataset.cursordisplay||element.dataset.cursorDisplay||"_";element.innerHTML=this.cursorDisplay;this.on=true;element.style.transition="all 0.1s";this.interval=setInterval(()=>this.updateBlinkState(),400);}
 Cursor.prototype.updateBlinkState=function(){if(this.on){this.element.style.opacity="0";this.on=false;}else{this.element.style.opacity="1";this.on=true;}}
 function TyperSetup(){var typers={};for(let e of document.getElementsByClassName("typer")){typers[e.id]=new Typer(e);}
 for(let e of document.getElementsByClassName("typer-stop")){let owner=typers[e.dataset.owner];e.onclick=()=>owner.stop();}
 for(let e of document.getElementsByClassName("typer-start")){let owner=typers[e.dataset.owner];e.onclick=()=>owner.start();}
 for(let e of document.getElementsByClassName("cursor")){let t=new Cursor(e);t.owner=typers[e.dataset.owner];t.owner.cursor=t;}}
 TyperSetup();`,
}}
 />
 {/* If you want to change the video need to update videoID */}
 <ModalVideo
     channel='custom'
     isOpen={!isOpen}
     videoId='https://www.seopromarvel.com/assets/SEOrevisedvideo.mp4'
     url='https://www.seopromarvel.com/assets/SEOrevisedvideo.mp4'
     onClose={() => setIsOpen(!isOpen)}
 />
        </>
    )
}

export default MainBanner;
