import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import AdminPostList from './AdminPosts/AdminPostList'
import AdminHeader from './AdminHeader/AdminHeader'
import AuthService from '../../tools/Services/AuthService';

class AdminMain extends Component {

    componentWillMount() {
        this.Auth = new AuthService();

        if (!this.Auth.loggedIn()) {
            window.location = "/login";
        }
    }


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