import mongoose from "mongoose";

// This code defines a Mongoose model for bookmarks, 
// with a schema that includes a user ID and an article ID 
// (referencing the User and NewsArticle models respectively), and exports it.

const bookmarkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  articleId: { // Add a reference to the article ID
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NewsArticle', // Assuming the article model is named 'NewsArticle'
    required: true
  }
}, { collection: 'bookmarks' }
);

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

export default Bookmark;