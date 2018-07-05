import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import fileSystem from 'file-system';
import img_item from './img_item/img';
import multer from 'multer';

// create instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(multer({ dest: '../client/src/images/',
  rename: (fieldname, filename) => {
   return filename;
  },
}).any());

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.post('/collections',(req,res) => {
  // const { author, text } = req.body;
  // const { img } = req.body;
  // if (!img) {
  //   // we should throw an error. we can do this check on the front end
  //   return res.json({
  //     success: false,
  //     error: 'No img'
  //   });
  // }
  const newItem = new img_item();
  newItem.img.data = fileSystem.readFileSync(req.files.userPhoto.path);
  newItem.img.contentType = 'image/jpeg';
  newItem.img.author = 'Jack';
  newItem.img.date = '2018-07-04';
  newItem.img.where = 'Chengdu';
  // newItem.save();
  comment.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use('/', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
