import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AdminPostList from './Posts/AdminPostList'

class AdminMain extends Component {
    render() {
        return (
            <div className="site">
                <Header />
                <div className="content">
                    <AdminPostList />
                </div>
                <Footer />
            </div>
        );
    }
}

export default AdminMain;