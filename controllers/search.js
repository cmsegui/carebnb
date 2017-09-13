const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const Home = require('../models/home');
const User = require('../models/user');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// return all homes, regardless of owner
router.get('/', (req, res) => {
  let allHomes = [];
  User.find({ isOwner: true })
    .then((owners) => {
        owners.map((owner) => {
            owner.homes.map((home) => {
                allHomes.push(home);
            });
        });
    res.json(allHomes);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;