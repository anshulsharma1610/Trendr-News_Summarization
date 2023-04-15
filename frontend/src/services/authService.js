import axios from "axios";

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

            return response.data;
        });
};

const googleLogin = () => {
    return axios
        .get(API_URL + "google")
        .then((response) => {
            console.log('-------------user', response);
            if (response.data.token) {

                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout,
    googleLogin
};

export default authService;