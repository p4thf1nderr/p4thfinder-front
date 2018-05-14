import React, { Component } from 'react';
import axios from 'axios';

import apiUrl from '../../../tools/connection';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const variables = {
              title: this.state.title,
              text: this.state.text
          };

        let FIO = 'eee';



        axios.post(
            apiUrl + '/posts/new', // url
            { 'input': variables }, // data
            {
                headers: { 
                    'Content-Type':  'application/json',
                    'Accept':        'application/json',
                },
            } // config
        )
        .then(function (response) {
            console.log(response); // Здесь обработать ответ как надо
        })
        .catch(function (error) {
           console.log(error);
        });
    }


    handleTitleChange(event) {
        this.setState({title:event.target.value})
    }

    handleTextChange(event) {
        this.setState({text:event.target.value})
    }

    render() {
        return (
            (
                <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Тайтл"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        className="titleField"
                    />
                    <input
                        type="text"
                        placeholder="Название"
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        className="textField"
                    />
                    <button className="submitbBtn">Сохранить</button>
                </form>
                </div>
            )
        )
    }

}

export default AddPost;