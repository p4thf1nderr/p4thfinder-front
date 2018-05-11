import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return (
            <a className="navbar-item" id="navMenuColorlink-example" href={this.props.item.href}>
                    <h1>{this.props.item.name}</h1>
            </a>
        );
    }
}

export default MenuItem;