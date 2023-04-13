import TrendingNews from '../models/trendingNews.js';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const API_KEY = 'pub_20431b6fb48c01a5ae7cc60463fb47d7345c8';
const BASE_URL = 'https://newsdata.io/api/1/news';
// OpenAI API configuration

export const fetchTrendingNews = async (queryParams) => {
    const newsArticles = [];
    let nextPage = null;
    for (let i = 0; i < 2; i++) {
        const url = new URL(BASE_URL);
        url.searchParams.append('apikey', API_KEY);
        // Append each query parameter from the client's request to the Newsdata.io API request
        for (const [key, value] of Object.entries(queryParams)) {
            url.searchParams.append(key, value);
        }
        // url.searchParams.append('language', 'en');
        if (nextPage !== null) {
            url.searchParams.append('page', nextPage);
        }
        console.log(url.toString())
        const response = await axios.get(url.toString());
        const data = response.data;
        nextPage = data.nextPage;
    }

    return data;

};



