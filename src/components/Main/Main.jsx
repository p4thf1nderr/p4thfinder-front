import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PostList from '../Posts/PostList'

class Main extends Component {
    render() {
        return(
            <div>
                <Header />
                <PostList />
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