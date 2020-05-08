const { Router } = require('express');
const randomNumber = require('../models/randomNumber');

const router = Router();


router.get('/', (req, res) => {
  res.type("text/plain");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  res.send("Add Page");   
});

router.post('/', async (req, res) => {    
  const randNum = new randomNumber({
    value: req.body.value,
    createdAt: req.body.time
  });

  try {
    await randNum.save();
    res.redirect('/api/numbers');
  } catch (e) {
    console.log(e);
    res.send("Error 404: Invalid value"); 
  }    
});


module.exports = router;