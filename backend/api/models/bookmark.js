import mongoose, { now } from "mongoose";
const bookmarkSchema = new mongoose.Schema({
      userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required:true
      },
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: false
      },
      dateCreated: {
        type: Date,
        default: Date.now
      }
    }
);

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

export default Bookmark;