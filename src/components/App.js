import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// импорт компонентов для роутера
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
