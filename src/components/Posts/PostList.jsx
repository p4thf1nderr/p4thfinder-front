import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../tools/connection';
import PostItem from './PostItem';
import TagsList from '../Tags/TagList';


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
          <TagsList />
      </div>

    );
  }
}

export default PostList;