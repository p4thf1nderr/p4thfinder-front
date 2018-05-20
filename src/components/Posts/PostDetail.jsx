import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../tools/connection';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


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
            //console.log(item);
            
            this.setState({
                 title: item.title,
                 text: item.text 
            });
            //console.log(response.data.data);
            
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
                    <p>{this.state.text}</p>
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