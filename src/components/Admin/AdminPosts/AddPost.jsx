import React, { Component } from 'react';
import axios from 'axios';

import apiUrl from '../../../tools/connection';
import AuthService from '../../../tools/Services/AuthService';
import AdminHeader from '../AdminHeader/AdminHeader';
import Footer from '../../Footer/Footer';
import CheckBox from '../Checkbox/Checkbox';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            tagId: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.checkedTags = this.checkedTags.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const variables = {
              title: this.state.title,
              text: this.state.text,
              tagId: this.state.tagId
        };

        this.Auth = new AuthService();
        let token = this.Auth.getToken();

        axios.post(
            apiUrl + '/admin/posts/new', // url
            { 'input': variables }, // data
            {
                headers: { 
                    'Content-Type':  'application/json',
                    'Accept':        'application/json',
                    'Authorization': 'Bearer '+ token
                },
            } // config
        )
        .then(function (response) {
            console.log(response); // Здесь обработать ответ как надо
            window.location = "/admin"
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

    checkedTags(tagId) {
        //this.setState({tagId: tagId})
        console.log('----');
        console.log(tagId);
        console.log('----');
        
        
        
    }

    render() {
        return (
            (
            <div className="site">
                <AdminHeader />
                <br />
                <div className="content">
                    <form onSubmit={this.handleSubmit}>
                        <div class="field">
                            <div class="control">
                                <input class="input" type="text" placeholder="Заголовок" value={this.state.title} onChange={this.handleTitleChange} className="input"/>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <textarea class="textarea" placeholder="Текст" onChange={this.handleTextChange} value={this.state.text} className="textarea"></textarea>
                            </div>
                        </div>
                        <CheckBox onChange={this.checkedTags}/>
                        <br />
                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-link">Сохранить</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
            )
        )
    }

}

export default AddPost;