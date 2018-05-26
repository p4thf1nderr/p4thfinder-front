import decode from 'jwt-decode';
import axios from 'axios';
import apiUrl from '../connection';


export default class AuthService {

    constructor() {
        this.login = this.login.bind(this);
        this.getToken = this.getToken.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
        this.isTokenExpired = this.isTokenExpired.bind(this);
    }

    login(username, password) {
        axios.post(
            'http://p4thfinder.loc/auth/login',
            {
                "email": username,
                "password": password
            },
            {
                headers: { 
                    'Content-Type':  'application/json',
                    'Accept':        'application/json',
                },
            }
        )
        .then(response => {
            console.log(response);
            
            this.setToken(response.data.token)
        })
        .catch(function (error) {
           console.log(error);
        });
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        return localStorage.getItem('id_token')
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    getProfile() {
        return decode(this.getToken());
    }

    _checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}