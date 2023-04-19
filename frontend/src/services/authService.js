import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import { history } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const API_URL = process.env.AUTH_API_URL || "http://localhost:8000/auth/";

const register = (fname, lname, email, password) => {
    return axios.post(API_URL + "signup", {
        fname, lname, email, password
    }).then((response) => {
        console.log('-------------user', response)
        if (response.data.token) {

            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
};

const login = (email, password) => {
    console.log('----', email, password);
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            console.log('-------------user', response)
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log('return------', response.data)
            return response.data;
        });
};

const googleLogin = () => {
    window.open(API_URL + 'google', "mywindow", "location=1,status=1,scrollbars=1, width=400,height=400");

    return new Promise((resolve, reject) => {
        window.addEventListener('message', (response) => {
            console.log('----res', response)
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            resolve(response.data);
        });
    });
};


// const googleLogin = () => {
//     window.open(API_URL + 'google', "mywindow", "location=1,status=1,scrollbars=1, width=400,height=400");
//     console.log('windoe', window);

//     let listener = window.addEventListener('message', (response) => {
//         console.log('----res', response)
//         if (response.data.token) {
//             localStorage.setItem("user", JSON.stringify(response.data));
//         }
//         return response.data;
//     });
//     console.log('-----listener', listener)

//     // return listener;

//     // return axios
//     //     .get(API_URL + "google", {
//     //         headers: {
//     //             "Access-Control-Allow-Origin": window.location.origin,
//     //         }
//     //     })
//     //     .then((response) => {
//     //         console.log('-------------user', response);
//     //         if (response.data.token) {

//     //             localStorage.setItem("user", JSON.stringify(response.data));
//     //         }

//     //         return response.data;
//     //     });
// }

const logout = () => {
    localStorage.removeItem("user");
    // history.push("/login")
};

const authService = {
    register,
    login,
    logout,
    googleLogin
};

export default authService;