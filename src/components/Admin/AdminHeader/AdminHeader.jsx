import React, { Component } from 'react';

class AdminHeader extends Component {
    render() {
        return (        
            <div>
                <div>
                <nav className="navbar is-link" aria-label="main navigation">
                    <div className="navbar-item">
                        <a href="/admin"><h3>Админка</h3> </a>
                    </div>
                </nav>
             </div>
            </div>
        );
    };
}

export default AdminHeader;