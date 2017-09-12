const express = require('express');
const bodyParser = require('body-parser');
const Home = require('../models/home');
const User = require('../models/user');
const Address = require('../models/address');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    Home.find().then(homes => {
        res.json(homes);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get('/email/:email', (req, res) => {
    Home.find({ 'owner.email': req.params.email }).then(homes => {
        res.json(homes);
    });
});

router.get('/:id', (req, res) => {
    Home.findById(req.params.id).then(home => {
        res.json(home);
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
      home
        .save()
        .then(newhome => {
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
router.put('/:id', (req, res) => {
    Home.findByIdAndUpdate(req.params.id, {
        'address.addressLine1': req.body.addressLine1,
        'address.addressLine2': req.body.addressLine2,
        'address.city': req.body.city,
        'address.state': req.body.state,
        'address.zipcode': req.body.zipcode,
        'address.latitude': 0,
        'address.longitude': 0,
        img: req.body.img,
        description: req.body.description,
        rooms: req.body.rooms,
        guests: req.body.guests,
        smoking: req.body.smoking,
        kids: req.body.kids,
        pets: req.body.pets
    }).then((home) => {
        return res.json(home);
    });
});

// router.delete('/:id', (req, res) => {
//     Home.findByIdAndRemove(req.params.id)
//     .then((home) => {
//         if (home) {
//             return res.json({
//                 message: 'home deleted'
//             });
//         }
//         else {
//             return res.json({
//                 message: 'home not found'
//             });
//         }
//     });
// });

module.exports = router;
