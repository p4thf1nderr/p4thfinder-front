import React, { Component } from 'react';
import AddPost from './AddPost';

class AdminPostList extends Component {

    render() {
        return (
                <div>
                    <nav class="panel">
                        <p class="panel-heading post-admin-list">
                            Список постов
                        </p>
                        <a class="panel-block is-active">
                            <span class="panel-icon">
                            <i class="fas fa-file-alt" aria-hidden="true"></i>
                            </span>
                            bulma
                        </a>
                        <div class="panel-block">
                            <button class="button is-link is-outlined is-fullwidth">
                            пагинацию сюда
                            </button>
                        </div>
                    </nav>
                </div>
        );
    };
}

export default AdminPostList;