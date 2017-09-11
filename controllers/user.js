const express = require('express');
const User = require('../models/user');
const router = express.Router();

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
    //console.log(req.body.email); 
    res.json('not implementede yet');
});
  
  module.exports = router;