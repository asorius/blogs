const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const blogSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    url: String,
    likes: Number
  },
  {
    toJSON: {
      transform: function(document, returningObject) {
        returningObject.id = returningObject._id.toString();
        delete returningObject.__v;
        delete returningObject._id;
      }
    }
  }
);
module.exports = mongoose.model('blog', blogSchema);
