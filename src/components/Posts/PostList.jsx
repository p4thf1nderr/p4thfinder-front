import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../tools/connection';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
        items: []
    };
  }

  componentDidMount() {
    axios.get(apiUrl + '/posts')
      .then(response => {
        const items = response.data.data;
        this.setState({ items });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
   console.log(this.state);
   
    
    return(
      <div className="columns">
        <div className="column is-three-quarters">
        <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                PHP
              </p>
              <a href="#" className="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <p>Создание модуля Laravel</p>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Подробнее</a>
            </footer>
          </div>
       
        </div>
        <div class="column">


             <div class="card">
            <header className="card-header">
              <p className="card-header-title">
                Категории
              </p>
              <a href="#" className="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
              <h5 class="subtitle is-5">Subtitle 1</h5>
              <h5 class="subtitle is-5">Subtitle 2</h5>
              <h5 class="subtitle is-5">Subtitle 2</h5>
              <h5 class="subtitle is-5">Subtitle 2</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
/* 

      <section className="section">
        <div className="container">
        <div class="card">
            <header className="card-header">
              <p className="card-header-title">
                Component
              </p>
              <a href="#" className="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Save</a>
              <a href="#" class="card-footer-item">Edit</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      </section> */
    );
  }
}

export default PostList;