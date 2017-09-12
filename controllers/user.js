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
    let newUser = new User(req.body);
    newUser.save().then((user) => {
      res.json(newUser)
    });    
  });
      

router.put('/:id', (req, res) => {
let id = req.params.id;
User.findByIdAndUpdate(id, { $set: req.body }).then((user) => {
    res.json(user);
  }).catch((err) => {
    res.json({
      message: 'Unable to save user.'
    });
  });
});


module.exports = router;