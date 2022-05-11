import React from 'react';

const ContactForm = () => {


    return (
        <>
            <div className="contact-area pt-4 mt-4">
                <div className="container">
                    <div className="section-title">
                        <h2>SEO Agency For Startup, Midsize And Enterprise Companies</h2>
                        <p>Audit Your Site - More Sales, More Leads, More Happy Customers...</p>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                    <div className="contact-form mb-4">
                        <form id="contactForm" action="https://seopromarvel.com/server.php" method="get" >
                            <div className="row">

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name="cn" className="form-control" id="name" required placeholder="Eg: Sarah Taylor" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="email" name="em" className="form-control" id="email" required placeholder="hello@sarah.com" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name="pn" className="form-control" id="phone_number" required placeholder="Enter your phone number" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" name="url" className="form-control" id="msg_subject" placeholder="Enter Website" required />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" cols="30" rows="3" required  placeholder="Enter message..."></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                                    <button type="submit" className="default-btn btn-orange mb-4">
                                        <i className='bx bx-paper-plane'></i> Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    </div>
                    <div className="col-lg-2"></div>

                </div>


            </div>
        </>
    )
}

export default ContactForm;
