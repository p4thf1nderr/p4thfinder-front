import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../tools/connection';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import renderHTML from 'react-render-html';


class PostDetail extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            id: this.props.match.params.id,
        };
    }

    componentWillMount() {
        axios.get(apiUrl + '/posts/' + this.state.id)
          .then(response => {
            const item = response.data.data;
            this.setState({
                 title: item.title,
                 text: item.text 
            });
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
           <div>
               <div className="site">
                <Header />
                <br />
                <div className="content">
                    <h2>{this.state.title}</h2>
                    {renderHTML(this.state.text)}
                </div>
                <Footer />
               {/*  <Header />
                <Posts />
                <Sidebar />
                <Footer /> */}
            </div>
           </div>
        );
    }
}


export default PostDetail;