const express = require('express');
const bodyParser = require('body-parser');
const Availability = require('../models/availability');
const Home = require('../models/home');
const User = require('../models/user');
const Address = require('../models/address');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// when making the new availability :
//required params are startdate enddate and home id
router.post('/', (req, res) => {
// find home by id
Home.findById(req.params.id)
    res.json(req.params.id)
});
//look at home.address.zipcode for zipcode

//then create new availability object using the 4 avail properties.

home: Home,
zipcode = req.body.zipcode,
startDate = req.body.startDate,
endDate = req.body.endDate

//////// make a post route and delete route.

