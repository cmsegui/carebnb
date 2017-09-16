const express = require('express');
const bodyParser = require('body-parser');
const Home = require('../models/home');
const User = require('../models/user');
const Address = require('../models/address');
const router = express.Router({ mergeParams: true});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/:id', (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      res.json(user);
      // let foundHome;
      // user.homes.map((home) => {
      //  if (home._id + '' === req.params.id) {
      //   foundHome = home;
      //  }
      // res.json(foundHome);
   })
    .catch(err => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  console.log(req.params.userId);
  User.findById(req.params.userId)
    .then((user) => {
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
        img: req.body.img,
        description: req.body.description,
        address: addr,
        rooms: req.body.rooms,
        guests: req.body.guests,
        smoking: req.body.smoking,
        kids: req.body.kids,
        pets: req.body.pets
      });
      // add home to user's home list
      user.homes.push(home);
      // save the user
      user.save().then((u) => {
          res.json(home);
      })
      .catch(err => {
        res.json({message: 'unable to save home'});
      });
    })
    .catch((err) => {
      res.json({ message: 'unable to find user'});
    });
});

router.put('/:homeId', (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      let home = user.homes.filter((home) => {
        // adding an emoty string here to convert home._id to string
        return (home._id + '' === req.params.homeId);
      })[0];
      if(home) {
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

        user.save({ new: true }).then((saved) => {
          res.json(home);
        })
        .catch(err => {
          res.json({ err });
        });
      }
      else {
        res.json({message: 'home not found'});
      }
    })
    .catch(err => {
      console.log(err);
      res.json({
        mesage: 'Unable to find user ' + req.params.userId
      });
    });
});

router.delete('/:homeId', (req, res) => {
  User.findOneAndUpdate({ 'homes._id': req.params.homeId },
  { $pull: { homes: { _id: req.params.homeId }}}, { new: true })
  .then((u) => {
    res.json(u);
  })
  .catch((err) => {
    res.json(err);
  })
});

module.exports = router;
