import React, { Component } from 'react';


class Menu extends Component {
    render() {
        return (
            <nav className="navbar" aria-label="main navigation">
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                Docs
                </a>

                <div className="navbar-dropdown">
                <a className="navbar-item">
                    Overview
                </a>
                <a className="navbar-item">
                    Elements
                </a>
                <a className="navbar-item">
                    Components
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                    Version 0.7.1
                </div>
                </div>
            </div>
        </nav>
        );
    }
}

export default Menu;