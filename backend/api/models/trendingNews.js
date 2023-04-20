

import mongoose, { now } from "mongoose";
// Mongoose schema for a collection named "TrendingNews" with four fields: title, pubDate, link, and image_url.
const TrendingNews = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      pubDate: {
        type: Date,
        required: true
      },
      link: 
      {
        type: String,
        required: true
      },
      image_url:
      {
        type: String,
        required: true
      } 

    }
);

// exports a model for the schema
const TrendNews = mongoose.model('TrendingNews', TrendingNews);

export default TrendNews;