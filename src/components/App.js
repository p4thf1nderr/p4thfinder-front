import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// импорт компонентов для роутера
import Main from './Main/Main';
import '../assets/style.css';
import ContactMain from './Contacts/ContactMain';
import AdminMain from './Admin/AdminMain';
import AddPost from './Admin/AdminPosts/AddPost';
import UpdatePost from './Admin/AdminPosts/UpdatePost';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/contacts" component={ContactMain} />
            <Route exact path="/admin" component={AdminMain} />
            <Route exact path="/admin/posts/new" component={AddPost} />
            <Route exact path="/admin/posts/edit/:id" component={UpdatePost} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
