import React, { Component } from 'react';
import axios from 'axios';
import apiUrl from '../../tools/connection';
import AuthService from '../../tools/Services/AuthService';


class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleEmailChange(event) {
        this.setState({email:event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password:event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.Auth = new AuthService();
        this.Auth.login(this.state.email, this.state.password);

        if (this.Auth.loggedIn() != false) {
            window.location = "/admin";
        }
    }


    render() {
        console.log(this.state);
        
        return (
                <div className="site">
                    <div className="content">
                    <br />

                    <div class="columns">
                        <div class="column"></div>
                        <div class="column">
                             <form onSubmit={this.handleSubmit}>
                             <div className="field">
                                 <label className="label">E-mail</label>
                             <div className="control">
                                 <input className="input" value={this.state.email} onChange={this.handleEmailChange} type="text" placeholder="E-mail" />
                             </div>
                             </div>
         
                             <div class="field">
                                 <label class="label">Пароль</label>
                             <div class="control">
                                 <input className="input" value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="Пароль" />
                             </div>
                             </div>
                             <div class="field is-grouped">
                                     <div class="control">
                                         <button class="button is-link">Сохранить</button>
                                     </div>
                                 </div>
                             </form>
                        </div>
                        <div class="column"></div>
                    </div>
                   
                    </div>
                </div>
        );
    }
}

export default Login;