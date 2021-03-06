import React, { Component } from 'react';
import AdminPostItem from './AdminPostItem';
import TagListEdit from '../../../components/Tags/TagListEdit';
import axios from 'axios';
import apiUrl from '../../../tools/connection';

class AdminPostList extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentWillMount() {
        axios.get(apiUrl + '/posts')
          .then(response => {
            const items = response.data.data;
            this.setState({ items });
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
                <div>
                    <nav class="panel">
                    <div className="columns">
                    <div className="column is-four-fifths">
                        <p class="panel-heading post-admin-list">
                            Список постов
                        </p>

                        {this.state.items.map(item =>
                            <AdminPostItem item={item} key={item.id} />
                        )} 
                        <div class="panel-block">
                            <button class="button is-link is-outlined is-fullwidth">
                            пагинацию сюда
                            </button>
                        </div>
                    </div>
                    <div class="column">
                    <TagListEdit />
                        </div>
                    </div>
                    </nav>
                    <a href="/admin/posts/new" class="button is-primary is-outlined">Создать</a>
                </div>
        );
    };
}

export default AdminPostList;