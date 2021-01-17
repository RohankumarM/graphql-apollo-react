const moogoose = require('mongoose');
const Schema = moogoose.Schema;

const authorSchema = new Schema({
  name: String, 
  age: Number
});

module.exports = moogoose.model('Author', authorSchema);