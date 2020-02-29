const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    passwordHash: String,
    name: String,
    token: String,
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'blog' }]
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
module.exports = mongoose.model('user', userSchema);
