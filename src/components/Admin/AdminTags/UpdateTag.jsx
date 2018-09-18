import React, { Component } from 'react';
import axios from 'axios';

import apiUrl from '../../../tools/connection';
import AuthService from '../../../tools/Services/AuthService';
import AdminHeader from '../AdminHeader/AdminHeader';
import Footer from '../../Footer/Footer';

class UpdateTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            id: this.props.match.params.id
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }


    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    }


    componentWillMount() {   
        axios.get(apiUrl + '/tags/' + this.state.id)
          .then(response => {
            const item = response.data.data;
            this.setState({
                 title: item.title
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }


    handleSubmit(event) {
        event.preventDefault();
        const variables = {
              title: this.state.title
        };

        this.Auth = new AuthService();

        console.log(variables);
        

        let token = this.Auth.getToken();

        axios.post(
            apiUrl + '/admin/tags/edit/' + this.state.id, // url
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


    render() {
        return (
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
                             
                            </div>
                        </div>
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
    }

}

export default UpdateTag;