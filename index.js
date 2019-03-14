const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:3001/meteor";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log(err);
  }
  db = client.db("meteor");

  app.listen(4321, () => {
    console.log("Escutando em localhost:4321");
  });
});


app.post("/notafiscal", (req, res) => {
  console.log(req.body);
  db.collection("/notafiscal").save(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(req.body);
  });
});


app.get("/", (req, res) => {
  res.send("Hello World");
});
