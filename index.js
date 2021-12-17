//we are creating server
require("dotenv").config();
const express = require("express");
const app = express();

//please take whatever port our machine use
//React use also 3000 on frontend
const port = process.env.PORT;

app.get("/movies", (req, res) => {
  res.send("Movies!");
});
app.get("/tv-shows", (req, res) => {
  res.send("Tv Shows!");
});

//
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
