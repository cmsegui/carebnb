const express = require('express');
const Home = require('../models/home');
const router = express.Router();

router.get('/', (req, res) => {
    Home.find().then((homes) => {
        res.json(homes);
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/:email', (req, res) => {
    Home.find({'owner.email': req.params.email}).then((homes) => {
        res.json(homes);
    });
});

// router.get('/:homeId', (req, res) => {
//     Home.findById(req.params.id).then((home) => {
//         res.json(home);
//     });
// });

// router.post('/', (req, res) => {
//     const newHome = new Home();
//         newHome.owner = new.body.home.owner,
//         newHome.img = new.body.home.img,
//         newHome.description = new.body.home.description, 
//         newHome.address = new.body.home.address,
//         newHome.rooms = new.body.home.rooms, 
//         newHome.guests = new.body.home.guests, 
//         newHome.smoking = new.body.home.smoking,
//         newHome.kids = new.body.home.kids,
//         newHome.pets = new.body.home.pets;
//     newHome.save().then((home) => {
//         res.json(home);
//     });

// router.put('/:homeId', (req, res) => {
//     Home.findByIdAndUpdate(req.params.homeId, {
//         img = new.body.home.img,
//         description = body.home.description, 
//         address = body.home.address,
//         rooms = body.home.rooms, 
//         guests = body.home.guests, 
//         smoking = body.home.smoking,
//         kids = body.home.kids,
//         pets = body.home.pets
//     })
//         .then((home) => {
//             return res.json(home);
//         });
// });

// router.delete('/:homeId', (req, res) => {
//     Shoe.findByIdAndRemove(req.params.homeId)
//     .then((home) => {
//         return res.json({
//             message: 'home deleted'
//         });
//     });
// });
    

    


module.exports = router;