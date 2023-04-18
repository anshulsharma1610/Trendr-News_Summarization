import axios from "axios";
import { ConsoleView } from "react-device-detect";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8000/api/";

export const getAnalytics = async () => {
    const response = await axios.get(API_URL + "analytics");
    return response.data;
};