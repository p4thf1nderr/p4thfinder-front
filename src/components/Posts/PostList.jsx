import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../tools/connection';
import PostItem from './PostItem';


class PostList extends Component {
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
    return(
      <div className="columns">
        <div className="column is-three-quarters">
                    {this.state.items.map(item =>
                    <PostItem item={item} key={item.id} />
          )}
       
        </div>
        <div class="column">


             <div class="card">
            <header className="card-header">
              <p className="card-header-title">
                Категории
              </p>
              <a href="#" className="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
              <h5 class="subtitle is-5">Subtitle 1</h5>
              <h5 class="subtitle is-5">Subtitle 2</h5>
              <h5 class="subtitle is-5">Subtitle 2</h5>
              <h5 class="subtitle is-5">Subtitle 2</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default PostList;