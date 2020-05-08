const { Router } = require('express');
const randomNumber = require('../models/randomNumber');
const router = Router();


router.get('/', (req, res) => {
  res.type("text/plain");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  res.send("Main Page"); 
});

router.get('/api/number', (req, res) => {
  res.type("text/plain");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  let randomNumber = Math.floor(Math.random() * 10) + 1;
  res.json({number: randomNumber});
});

router.get('/api/numbers', async (req, res) => {
  const numbers = await randomNumber.find().lean();

  res.type("text/plain");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  res.send(numbers);
});



module.exports = router;