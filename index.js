const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

//몽구스 연결
mongoose
  .connect(
    "mongodb+srv://root:1234@bitnari.coqvziz.mongodb.net/bitnari?retryWrites=true&w=majority",
    {}
  )
  .then(() => console.log("mongoose conneted"))
  .catch(() => console.log("error"));

app.get("/", (req, res) => {
  res.send("Hello World!~~~ 안녕하세요");
});

app.listen(port, () => {
  console.log(`boiler plate listening... ${port}`);
});
