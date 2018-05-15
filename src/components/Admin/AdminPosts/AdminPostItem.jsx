import React, { Component } from 'react';

class AdminPostItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: props
        }
      }

    render() {
        return(
            <a class="panel-block is-active">
                <span class="panel-icon">
                <i class="fas fa-file-alt" aria-hidden="true"></i>
                </span>
                {this.state.item.item.title}
            </a>
        );
    }
}

export default AdminPostItem;