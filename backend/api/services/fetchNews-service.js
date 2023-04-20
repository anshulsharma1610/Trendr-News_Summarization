import axios from 'axios';
import NewsArticleModel from '../models/newsModel.js';
import { Configuration, OpenAIApi } from 'openai';

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsdata.io/api/1/news';
// OpenAI API configuration
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
// Initialize the OpenAI API client
const openai = new OpenAIApi(configuration);

// Function to summarize content using GPT-3
const summarizeContent = async (content) => {
    // Implement the summarization logic here.
    const prompt = `a news app should show the mini-version of the news article to the users. News App needs you to respond just with the mini version. Here is the article:${content}`;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 84, // Limit the summary length
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });

    return response.data.choices[0].text.trim();
};

// An asynchronous function that retrieves news articles from the Newsdata.io API based on the specified query parameters,
//  summarizes the content of each article using GPT-3, adds the summary to the article object,
//   saves the articles to MongoDB using the Mongoose model, and returns the articles.

export const fetchNews = async (queryParams) => {
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
        for (const article of data.results) {
            // Skip the current iteration if image_url is null
            if (article.image_url === null || article.content === null) {
                continue;
            }
            const summary = await summarizeContent(article.content.substring(0, 9000)); // Use GPT-3 to summarize content
            article.summary = summary; // Add the summary to the article object
            newsArticles.push(article);
        }
        nextPage = data.nextPage;
    }

    // Save the articles to the MongoDB database using the Mongoose model
    await NewsArticleModel.insertMany(newsArticles);

    return newsArticles;
};
