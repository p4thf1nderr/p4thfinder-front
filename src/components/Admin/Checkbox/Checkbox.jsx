import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../../tools/connection';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            tagId: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get(apiUrl + '/tags')
          .then(response => {
            const tags = response.data;    
            this.setState({ tags:tags });
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleClick(tagId) {
        this.props.onChange(tagId)
        console.log(tagId);
    }

    render() {
        return(
        <div class="select">
        <select multiple size={this.state.tags.length} value={this.state.tagId} onChange={this.handleClick(this.state.tagId)}>
        {this.state.tags.map(tag =>
                    <option value={tag.id}>{tag.title}</option>
        )}    
        </select>
        <br />
        </div>
        );
    }
}

export default CheckBox;