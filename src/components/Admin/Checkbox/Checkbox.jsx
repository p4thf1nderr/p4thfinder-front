import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../../tools/connection';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            checked: []
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

    handleClick(event) {
        let checked = this.state.checked;
        checked.push(event.target.value);
        this.setState({checked: checked});
        this.props.onChange(this.state.checked);
    }

    

    render() {
        console.log(this.state.checked);
        
        return(
        <div class="select">
        <select multiple size={this.state.tags.length} onChange={this.handleClick}>
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