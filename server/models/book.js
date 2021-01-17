const moogoose = require('mongoose');
const Schema = moogoose.Schema;

const bookSchema = new Schema({
  name: String, 
  genre: String,
  authorId: String
});

module.exports = moogoose.model('Book', bookSchema);