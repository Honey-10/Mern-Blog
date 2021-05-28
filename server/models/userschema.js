const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  work: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

// bcrypt password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});
//bcrypt end

//generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let tokengen = jwt.sign({ _id: this._id }, process.env.SECREAT_KEY);
    this.tokens = this.tokens.concat({ token: tokengen });
    await this.save();
    return tokengen;
  } catch (err) {
    console.log(err);
  }
};

//token end

const User = mongoose.model("User", userSchema);

module.exports = User;
