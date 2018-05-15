import React, { Component } from 'react';
import AdminPostItem from './AdminPostItem';
import axios from 'axios';
import apiUrl from '../../../tools/connection';

class AdminPostList extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
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
                    </nav>
                </div>
        );
    };
}

export default AdminPostList;