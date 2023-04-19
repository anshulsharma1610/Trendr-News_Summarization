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
    return axios.put(API_URL + "users/"+ id, body )
    }

const getUserDetail=(id)=>{
    return axios.get(API_URL+"users/"+id);
}
const updateUser=(id,  body)=>{
    console.log("I am here--> body:: ", body,"id--->", id);
    return axios.put(API_URL+"users/"+id, body);
}
const deletePrefernce=(id)=>{
    return axios.delete(API_URL+"preferences/"+id);
}

const addPreferences=(body)=>{
    return axios.post(API_URL+"preferences",body);

}
const getAllSubscription=()=>{
    return axios.get(API_URL + "subscriptions")
    }
    
const updateDescriptions=(id,  body)=>{
        return axios.put(API_URL+"subscriptions/"+id, body);
    }
    
const deleteSubscriptions=(id)=>{
        return axios.delete(API_URL+"subscriptions/"+id);
    }

const addSubscriptions=(id, body)=>{
    return axios.post(API_URL+"subscriptions/"+id, body);

}
const getallUserSubscriptions=()=>{
    return axios.get(API_URL+"usersubscriptions");

}

const userService = {
    getPublicContent, getAllPrefernce, updatePrefernce, getUserDetail, updateUser, deletePrefernce,addPreferences
,getAllSubscription, updateDescriptions, deleteSubscriptions, addSubscriptions,getallUserSubscriptions };


export default userService