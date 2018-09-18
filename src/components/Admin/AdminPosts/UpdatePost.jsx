import React, { Component } from 'react';
import axios from 'axios';

import apiUrl from '../../../tools/connection';
import AuthService from '../../../tools/Services/AuthService';
import AdminHeader from '../AdminHeader/AdminHeader';
import Footer from '../../Footer/Footer';
import CheckBox from '../Checkbox/Checkbox';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, convertFromRaw, convertFromHTML, ContentState, compositeDecorator} from 'draft-js';
import draftToHtml from "draftjs-to-html";



class UpdatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            tags: [],
            checked: [],
            id: this.props.match.params.id,
            editorState: EditorState.createEmpty()
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkedTags = this.checkedTags.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }


    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    }

    checkedTags(event) {
        console.log(event);
        
        this.setState({checked:event})
    }


    componentWillMount() {
        axios.get(apiUrl + '/posts/' + this.state.id)
          .then(response => {
            const item = response.data.data;
            console.log(item);
            

            const blocksFromHTML = convertFromHTML(item.text);
            const state = ContentState.createFromBlockArray(
              blocksFromHTML.contentBlocks,
              blocksFromHTML.entityMap,
            );

            this.setState({
                 title: item.title,
                 text: item.text,
                 tags: item.tags,
                 editorState: EditorState.createWithContent(
                    state,
                    compositeDecorator,
                  ),
            });
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }


    handleSubmit(event) {
        event.preventDefault();
        const variables = {
              title: this.state.title,
              text: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
              checked: this.state.checked
        };

        this.Auth = new AuthService();
        let token = this.Auth.getToken();

        axios.post(
            apiUrl + '/admin/posts/edit/' + this.state.id, // url
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
                                <Editor
                                    editorState={this.state.editorState}
                                    onEditorStateChange={this.onEditorStateChange}
                                  />
                            </div>
                            {this.state.tags.map(item =>
                            <h2>{item.title}</h2>
                        )} 
                        </div>
                        <CheckBox onChange={this.checkedTags}/>
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

export default UpdatePost;