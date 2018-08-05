// model/comment.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const imgSchema = new Schema ({
    path: String,
    author: String,
    date: String,
    where: String
  });

// export our module to use in server.js
module.exports = imgSchema;
