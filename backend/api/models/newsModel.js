import mongoose from 'mongoose';

// Define a schema for comments
const CommentSchema = new mongoose.Schema({
    /* Implementation for UserId or UserName required */
    userId: mongoose.Schema.Types.ObjectId,
    userFullName: String,
    content: String,
    timestamp: Date,
});

const NewsArticleSchema = new mongoose.Schema({
    title: String,
    link: String,
    keywords: [String],
    creator: [String],
    video_url: String,
    description: String,
    content: String,
    pubDate: String,
    image_url: String,
    source_id: String,
    category: [String],
    country: [String],
    language: String,
    summary: String, // Field to store the summary generated by GPT-3
    likes: { type: Number, default: 0 }, // Field to store the number of likes
    comments: [CommentSchema], // Field to store the comments
    shares: { type: Number, default: 0 }, // Field to store the number of shares
}, { collection: 'news' }); // Specify the custom collection name 'news'

const NewsArticleModel = mongoose.model('NewsArticle', NewsArticleSchema);

export default NewsArticleModel;
