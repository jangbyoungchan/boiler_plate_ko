const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number, //0 :일반유저, 1:관리자
    default: 0,
  },
  image: String,
  token: String, //토큰 유효성
  tokenExp: Number, //토큰 유효기간
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User, //model을 export
};
