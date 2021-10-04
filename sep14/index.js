const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

var citiesJSON = fs.readFileSync("cities.json", "utf-8");

app.get("/", (req, res) => {
  return res.json(citiesJSON);
});

app.listen(process.env.PORT || 3000, () =>
  console.log("server starting on port " + port);
);
