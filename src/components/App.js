import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// импорт компонентов для роутера
import Main from './Main/Main';
import '../assets/style.css';
import ContactMain from './Contacts/ContactMain'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <body>
            <Route exact path="/" component={Main} />
            <Route exact path="/contacts" component={ContactMain} />
          </body>
      </BrowserRouter>
    );
  }
}

export default App;
