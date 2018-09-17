import React, { Component } from 'react';
import axios from 'axios';

import apiUrl from '../../../tools/connection';
import AuthService from '../../../tools/Services/AuthService';
import AdminHeader from '../AdminHeader/AdminHeader';
import Footer from '../../Footer/Footer';
import TagsListAdmin from '../AdminTags/TagListAdmin';
import CheckBox from '../Checkbox/Checkbox';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import draftToHtml from "draftjs-to-html";


class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            checked: [],
            editorState: EditorState.createEmpty()
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        //this.handleTextChange = this.handleTextChange.bind(this);
        this.checkedTags = this.checkedTags.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }


    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const variables = {
              title: this.state.title,
              text: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
              checked: this.state.checked
        };
        console.log(variables);
        

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


    checkedTags(event) {
        console.log(event);
        
        this.setState({checked:event})
    }

    render() {
        console.log(this.state.editorState);
        
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
                                <Editor
                                    editorState={this.state.editorState}
                                    onEditorStateChange={this.onEditorStateChange}
                                  />
                            </div>
                        </div>
                        <CheckBox onChange={this.checkedTags}/>
                        <br />
                        <br />
                        <br />
                        <div class="column">
                            <TagsListAdmin />
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
        )
    }

}

export default AddPost;