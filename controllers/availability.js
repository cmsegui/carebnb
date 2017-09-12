// const express = require('express');
// const bodyParser = require('body-parser');
// const Availability = require('../models/availability');
// const Home = require('../models/home');
// const User = require('../models/user');
// const Address = require('../models/address');
// const router = express.Router({mergeParams: true});

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

// router.post('/', (req, res) => {
//   Home.findById(req.body.homeId)
//     .then((home) => {
//         let zipcode = home.address.zipcode;
//         const newAvailability = new Availability({
//             home: home,
//             zipcode: zipcode,
//             startDate: req.body.startDate,
//             endDate: req.body.endDate
//         });
//         newAvailability.save().then((a) => {
//             res.json(a);
//         }).catch((err) => {
//             res.json({
//                 message: 'Unable to save'
//             })
//          });
//     }).catch((err) => {
//        res.json({
//            message: 'Home not found'
//        })
//     });
// });



// //////// make a post route and delete route.
// module.exports = router;