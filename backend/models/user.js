const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required!'],
      minLength: 2,
      maxLength: 32,
      trim: true,
    },
    userId: {
      type: String,
      required: [true, 'user id field is required!'],
      minLength: 2,
      maxLength: 32,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'password can not be empty!'],
      maxLength: 256,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const SALT = process.env.SALT;

  const salt = await bcryptjs.genSalt(parseInt(SALT));
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function () {
  const SECRET = process.env.SECRET;
  const payload = {
    id: this._id,
    name: this.name,
    userId: this.userId,
  };

  const token = jwt.sign(payload, SECRET);

  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
