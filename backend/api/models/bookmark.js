import mongoose from "mongoose";
const bookmarkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  articleId: { // Add a reference to the article ID
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NewsArticle', // Assuming the article model is named 'Article'
    required: true
  }
}, { collection: 'bookmarks' }
);

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

export default Bookmark;