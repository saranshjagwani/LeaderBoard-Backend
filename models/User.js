const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  img: { type: String ,default:"https://cdn-icons-png.flaticon.com/512/149/149071.png"},
  points: { type: Number, default: 0 },
});
// Pre-save hook: Replace empty image string with undefined so default applies
userSchema.pre("save", function (next) {
  if (this.img === "") {
    this.img = undefined;
  }
  next();
});


module.exports = mongoose.model("User", userSchema);
