import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../tools/connection';

class TagsList extends Component {
    constructor() {
        super();
        this.state = {
            tags: []
        };
    }

    componentDidMount() {
        axios.get(apiUrl + '/tags')
          .then(response => {
            const tags = response.data;    
            this.setState({ tags });
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    render() {
        console.log(this.state);
        
        return (
            <div class="column">


             <div class="card">
            <header className="card-header">
              <p className="card-header-title">
                Категории
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                {this.state.tags.map(tag =>
                    <a href={'/tags/' + tag.id}><h1 key={tag.id} class="subtitle is-5">{tag.title}</h1></a>
                )}
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default TagsList;