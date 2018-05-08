import React, { Component } from 'react';

import MenuItem from '../Nav/MenuItem';

import ItemList from '../../data/items';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            items: ItemList
        };    
    }

    render() {
        return (
            <div>
            <nav className="navbar is-link" aria-label="main navigation">
            <div className="navbar-item">
                
               {this.state.items.map((item) => (
                   <MenuItem key={item.id} item={item}/>
               ))}
            </div>
        </nav>
      </div>
        );
    }
}

export default Menu;