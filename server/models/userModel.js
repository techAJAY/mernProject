var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    address: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
