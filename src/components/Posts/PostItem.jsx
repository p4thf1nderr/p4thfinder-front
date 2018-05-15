import React, { Component } from 'react';


class PostItem extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            item: props
        }
      }

    render() {
        return (
            <div className="card">
                <header className="card-header">
                <p className="card-header-title">
                    PHP
                </p>
                <a href="#" className="card-header-icon" aria-label="more options">
                    <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
                </header>
                <div class="card-content">
                <div class="content">
                    <p>{this.state.item.item.title}</p>
                </div>
                </div>
                <footer class="card-footer">
                <a href="#" class="card-footer-item">Подробнее</a>
                </footer>
            </div>
        );
    }
}


export default PostItem;