import mongoose, { now } from "mongoose";
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

const TrendNews = mongoose.model('TrendingNews', TrendingNews);

export default TrendNews;