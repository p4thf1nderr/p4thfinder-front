import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import AdminPostList from './Posts/AdminPostList'
import AdminHeader from './AdminHeader/AdminHeader'

class AdminMain extends Component {
    render() {
        return (
            <div className="site">
                <AdminHeader />
                <div className="content">
                    <AdminPostList />
                </div>
                <Footer />
            </div>
        );
    }
}

export default AdminMain;