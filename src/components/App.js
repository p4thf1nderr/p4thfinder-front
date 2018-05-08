import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// импорт компонентов для роутера
import Main from './Main/Main';
import '../assets/style.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <body>
            <Route exact path="/" component={Main} />
          </body>
      </BrowserRouter>
    );
  }
}

export default App;
