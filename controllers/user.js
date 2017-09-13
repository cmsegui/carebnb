const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req,res) => {
    User.find().select('_id email username img isOwner').then((users) => {
      res.json(users);
    }).catch((err) => {
        res.json({ message: 'unable to get users' });
    });
  });
  
router.get("/:id", (req,res) => {
    User.findById(req.params.id).then((user) => {
      res.json(user);
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
User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
  .then((user) => {
    res.json(user);
  }).catch((err) => {
    res.json({ message: 'Unable to save user.' });
  });
});


module.exports = router;