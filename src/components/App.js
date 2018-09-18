import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// импорт компонентов для роутера
import Main from './Main/Main';
import '../assets/style.css';
import ContactMain from './Contacts/ContactMain';
import AdminMain from './Admin/AdminMain';
import AddPost from './Admin/AdminPosts/AddPost';
import UpdatePost from './Admin/AdminPosts/UpdatePost';
import UpdateTag from './Admin/AdminTags/UpdateTag';
import Login from './Login/Login';
import PostDetail from './Posts/PostDetail';
import AddTag from './Admin/AdminTags/AddTag';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/contacts" component={ContactMain} />
            <Route exact path="/admin" component={AdminMain} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin/posts/new" component={AddPost} />
            <Route exact path="/admin/posts/edit/:id" component={UpdatePost} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route exact path="/admin/tags/edit/:id" component={UpdateTag} />
            <Route exact path="/admin/tags/new" component={AddTag} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
