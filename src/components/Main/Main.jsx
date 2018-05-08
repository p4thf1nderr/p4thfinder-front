import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <Footer />
               {/*  <Header />
                <Posts />
                <Sidebar />
                <Footer /> */}
            </div>
        );
    }
}

export default Main;