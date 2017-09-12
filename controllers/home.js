const express = require('express');
const bodyParser = require('body-parser');
const Home = require('../models/home');
const User = require('../models/user');
const Address = require('../models/address');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  let allHomes = [];
  Users.find({ isOwner: true })
    .then(owner => {
      owner.homes.map(home => {
        allHomes.push(home);
      });
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  User.find({ email: req.body.email })
    .then(user => {
      let addr = new Address({
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        latitude: 0,
        longitude: 0
      });
      let home = new Home({
        owner: user,
        img: req.body.img,
        description: req.body.description,
        address: addr,
        rooms: req.body.rooms,
        guests: req.body.guests,
        smoking: req.body.smoking,
        kids: req.body.kids,
        pets: req.body.pets
      });
      home.save().then(newhome => {
          res.json(newhome);
        })
        .catch(err => {
          res.json(err.message);
        });
    })
    .catch(err => {
      res.json(err.message);
    });
});

router.put('/users/:userId/home/:homeId', (req, res) => {
  User.findById(userId)
    .then(user => {
      let home = user.home.filter(home => {
        return (home._id = req.params.homeId);
      })[0];
        home.address.addressLine1 = req.body.addressLine1,
        home.address.addressLine2 = req.body.addressLine2,
        home.address.city = req.body.city,
        home.address.state = req.body.state,
        home.address.zipcode = req.body.zipcode,
        home.address.latitude = 0,
        home.address.longitude = 0,
        home.img = req.body.img,
        home.description = req.body.description,
        home.rooms = req.body.rooms,
        home.guests = req.body.guests,
        home.smoking = req.body.smoking,
        home.kids = req.body.kids,
        home.pets = req.body.pets

      home.save().then(savedHome => {
          res.json(savedHome);
        })
        .catch(err => {
          res.json({
            message: 'Unable to save home.'
          });
        });
    })
    .catch(err => {
      res.json({
        mesage: 'Unable to find user'
      });
    });
});

router.delete('/:id', (req, res) => {
        Home.findByIdAndRemove(req.params.id)
        .then((home) => {
            if (home) {
                return res.json({
                    message: 'home deleted'
                });
            }
            else {
                return res.json({
                    message: 'home not found'
                });
            }
        });
});

module.exports = router;
