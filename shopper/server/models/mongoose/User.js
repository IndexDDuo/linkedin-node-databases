const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

<<<<<<< HEAD
const UserSchema = mongoose.Schema({
  email: {
    // Trim and lowercase
    type: String, required: true, index: { unique: true }, lowercase: true, trim: true,
=======
const UserSchema = mongoose.Schema(
  {
    email: {
      // Trim and lowercase
      type: String,
      required: true,
      index: { unique: true },
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
>>>>>>> 03_07e
  },
  { timestamps: true }
);

async function generateHash(password) {
  const COST = 12;
  return bcrypt.hash(password, COST);
}

<<<<<<< HEAD
UserSchema.pre('save', function preSave(next) {
  const user = this;

  // Only create a new password hash if the field was updated
  if(user.isModified('password')) {
    return generateHash(user.password).then(hash => {
      user.password = hash;
      return next();
    }).catch(error => {
      return next(error);
    });
=======
UserSchema.pre("save", function preSave(next) {
  const user = this;

  // Only create a new password hash if the field was updated
  if (user.isModified("password")) {
    return generateHash(user.password)
      .then((hash) => {
        user.password = hash;
        return next();
      })
      .catch((error) => {
        return next(error);
      });
>>>>>>> 03_07e
  }
  return next();
});

<<<<<<< HEAD
UserSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
=======
UserSchema.methods.comparePassword = async function comparePassword(
  candidatePassword
) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
>>>>>>> 03_07e
