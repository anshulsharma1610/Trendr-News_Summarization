import axios from "axios";
import { ConsoleView } from "react-device-detect";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8000/api/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};
const getAllPrefernce=()=>{
    return axios.get(API_URL + "preferences")
    }

 const updatePrefernce=(id, body)=>{
    console.log("body -----> ",body);
    return axios.put(API_URL + "users/"+ id, body )
    }

const userService = {
    getPublicContent, getAllPrefernce, updatePrefernce
};


export default userService