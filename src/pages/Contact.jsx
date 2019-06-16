import React from 'react';
import ContactForm from '../components/contactForm';
import Header from '../components/header';
import Footer from '../components/footer';
const Contact = () => {
    return (
        <div>
            <Header />
            <div id="mainBody">
                <div className="container">
                    <hr className="soften" />
                    <h1>Visit us</h1>
                    <hr className="soften" />	
                        <div className="row">
                            <div className="span4">
                                <h4>Contact Details</h4>
                                <p>	Njoro Egerton,<br /> Nakuru,kenya
                                    <br /><br />
                                    omondibrian392@gmail.com<br />
                                    Tel +254746256043<br />
                                </p>		
                            </div>
                            <div className="span4">
                                <h4>Opening Hours</h4>
                                <h5> Monday - Friday</h5>
                                <p>09:00am - 09:00pm<br /><br /></p>
                                <h5>Saturday</h5>
                                <p>09:00am - 07:00pm<br /><br /></p>
                                
                            </div>
                          <ContactForm />
                        </div>
                    </div>
                </div>
                <Footer />
        </div>

     );
}
 
export default Contact;