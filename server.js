require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('debug', true);


const UserController = require('./controllers/user');
const HomeController = require('./controllers/home');
const SearchController = require('./controllers/search');
//const AvailabilityController = require('./controllers/availability');
const app = express();

mongoose.Promise = global.Promise;

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log("Mongoose Connected Successfully");
})

connection.on('error', (err) => {
  console.log("Mongoose connection error: " + err);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client/build/'));



app.use('/api/user', UserController);
app.use('/api/user/:userId/home', HomeController);
app.use('/api/search', SearchController);

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("App is listening on: " + PORT);
});
