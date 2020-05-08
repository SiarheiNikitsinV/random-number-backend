const express = require("express");
const mongoose = require('mongoose');

const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');

 
const app = express();


app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/api/number', homeRoutes);
app.use('/add', addRoutes);


const PORT = process.env.PORT || 5000;


async function start() {
  try {
    const url = `mongodb+srv://SerjNickey:666000666@cluster0-ybhdv.mongodb.net/numbers`;
    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  } catch (e) {
    console.log(e);
  }
}

start();