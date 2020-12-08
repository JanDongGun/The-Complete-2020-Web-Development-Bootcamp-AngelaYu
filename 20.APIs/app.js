const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let email = req.body.email;

  console.log(fname, lname, email);
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});

// 466997e3c0d4abecedb43a36072b2bae-us7
