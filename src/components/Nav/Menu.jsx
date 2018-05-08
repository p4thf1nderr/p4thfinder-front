import React, { Component } from 'react';

import MenuItem from '../Nav/MenuItem';

import ItemList from '../../data/items';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            items: ItemList
        };
        console.log(this.state);
        
    }

    render() {
        return (
            <nav className="navbar" aria-label="main navigation">
            <div className="navbar-item has-dropdown is-hoverable">
                
               {this.state.items.map((item) => (
                   <MenuItem key={item.id} item={item}/>
               ))}

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