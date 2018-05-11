import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class ContactMain extends Component {
    render() {
        return(
            <div>
                <Header />
                <br />
                <ContactForm />
                <Footer />
               {/*  <Header />
                <Posts />
                <Sidebar />
                <Footer /> */}
            </div>
        );
    }
}

export default ContactMain;