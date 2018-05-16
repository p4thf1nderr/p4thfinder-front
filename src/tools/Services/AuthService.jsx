import decode from 'jwt-decode';
import axios from 'axios';
import apiUrl from '../connection';


export default class AuthService {
    // Initializing important variables
   /*  constructor(domain) {
        this.domain = domain || 'http://localhost:8080' // API server domain
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    } */

    constructor() {
        this.login = this.login.bind(this);
    }

    login(username, password) {
        axios.post(
            'http://p4thfinder-back.loc/auth/login',
            {
                "email": "artem.tretyakov.91@inbox.ru",
                "password": "17121991"
            },
            {
                headers: { 
                    'Content-Type':  'application/json',
                    'Accept':        'application/json',
                },
            }
        )

        .then(response => {
            this.setToken(response.data.token)
        })
        .catch(function (error) {
           console.log(error);
        });
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
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
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}