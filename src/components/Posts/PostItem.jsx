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
                </header>
                <div class="card-content">
                <div class="content">
                    <p>{this.state.item.item.title}</p>
                </div>
                </div>
                <footer class="card-footer">
                <a href={'/posts/' + this.state.item.item.id} class="card-footer-item">Подробнее</a>
                </footer>
            </div>
        );
    }
}


export default PostItem;