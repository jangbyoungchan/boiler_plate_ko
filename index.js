const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { User } = require("./model/User");
const config = require("./config/key");
const port = 5000;

//몽구스 연결
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("mongoose conneted"))
  .catch(() => console.log("error"));

//application/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!~~~ 안녕하세요......");
});

app.post("/user/register", async (req, res) => {
  console.log(`register ${JSON.stringify(req.body)}`);
  const user = new User(req.body);

  const result = await user.save().then(
    () => {
      return {
        success: true,
      };
    },
    (reason) => {
      return {
        success: false,
        reason: reason,
      };
    }
  );
  console.log(result);
  return res.json(result);
});

app.listen(port, () => {
  console.log(`boiler plate listening... ${port}`);
});
