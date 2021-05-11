const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./content/Homepage.html"));
});

app.all("*", (req, res) => {
  req.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
