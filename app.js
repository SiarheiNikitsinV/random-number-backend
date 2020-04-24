const express = require("express");
 
const app = express();

app.get("/", (req, res) => {    
  res.type("text/plain");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  res.send("Main Page");   
});

app.get("/api/number", (req, res) => {   
  res.type("text/plain");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

  let randomNumber = Math.floor(Math.random() * 10) + 1;
  res.json({number: randomNumber});
});


const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

