import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AdminPostList from './Posts/AdminPostList'

class AdminMain extends Component {
    render() {
        return (
            <div>
                <Header />
                <AdminPostList />
                <Footer />
            </div>
        );
    }
}

export default AdminMain;