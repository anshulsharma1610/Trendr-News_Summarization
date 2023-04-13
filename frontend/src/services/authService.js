import axios from "axios";

const API_URL = process.env.AUTH_API_URL || "http://localhost:8000/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
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

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;