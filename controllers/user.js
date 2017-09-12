const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req,res) => {
    User.find().then((users) => {
      res.json(users);
    }).catch((err) => {
        res.json(err);
    })
  });
  
router.get("/:email", (req,res) => {
    User.findOne({email: req.params.email}).then((users) => {
      res.json(users);
    });
  });
  
router.post('/', (req,res) => {
    let newUser = new User();
        newUser.email = req.body.email; 
        newUser.password = req.body.password;
        newUser.username = req.body.username;
        newUser.img = req.body.img;  
        newUser.isOwner = req.body.isOwner;
    newUser.save().then((user) => {
      res.json(newUser)
    });    
  });
      


// // put route

// router.put('/:id', (req, res) => {
//     User.findByIdAndUpdate(req.params.id, {
//         email = req.body.email, 
//         password = req.body.password,
//         username = req.body.username,
//         img = req.body.img, 
//         isOwner = req.body.isOwner
//   }).then((user) => {
//     res.json(user);
//   });
// });


module.exports = router;