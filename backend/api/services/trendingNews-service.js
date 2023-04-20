import TrendingNews from '../models/trendingNews.js';
import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';
//import Config from '../config/newsConfig'
// const API_KEY = 'pub_204717690f1e4792cb753f7bcb2b49ee70c77';
// const BASE_URL = 'https://newsdata.io/api/1/news';
// OpenAI API configuration

import dotenv from 'dotenv';

// function fetches 10 trending news articles with images based on the given query parameters using the Newsdata.io API.
export const fetchTrendingNews = async (queryParams) => {
    const newsArticles = [];
    let nextPage = null;
    for (let i = 0, j = 0; j < 10 && i < 10; i++) {
        const url = new URL(process.env.NEWS_BASE_URL);
        url.searchParams.append('apikey', process.env.NEWS_API_KEY);
        // Append each query parameter from the client's request to the Newsdata.io API request
        for (const [key, value] of Object.entries(queryParams)) {
            url.searchParams.append(key, value);
        }
        if (nextPage !== null) {
            url.searchParams.append('page', nextPage);
        }
        console.log(url.toString())
        const response = await axios.get(url.toString());
        const data = response.data;
        for (const article of data.results) {
            if (j >=10) {
                break;
            }
            if (article.image_url != null) {
                newsArticles.push({
                    title: article.title,
                    pubDate: article.pubDate,
                    link: article.link,
                    image_url: article.image_url
                });
                j++;
            }
        }
        nextPage = data.nextPage;
    }
    return newsArticles;
};
