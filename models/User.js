const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  bio: String,
  location: String,
  website: String,
  joinDate: Date,
  followersCount: Number,
  followingCount: Number,
});

module.exports = mongoose.model("User", userSchema);
