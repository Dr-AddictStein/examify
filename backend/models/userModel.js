import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  role: {
    type: String,
  },

  phone: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  
  address: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (
  username,
  email,
  role,
  phone,
  password,
  address
) {
  const exist = await this.findOne({ email });
  const existU = await this.findOne({ username });
  console.log('req.body' ,username,
  email,
  role,
  phone,
  password,
  address);

  if (exist) {
    throw Error("Email already exists.!.");
  }
  if (existU) {
    throw Error("Username already Taken.!.");
  }
  if (!email || !password || !username) {
    throw Error("All fields must be filled...");
  }
  if (!validator.isEmail(email)) {
    throw Error("Not a valid email.!.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough.!.");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    username,
    email,
    role,
    phone,
    password: hash,
    address
  });

  return user;
};

userSchema.statics.login = async function (username, password) {
  if (!password || !username) {
    throw Error("All fields must be filled...");
  }

  const user = await this.findOne({ username });

  if (!user) {
    throw Error("Incorrect Username.!.");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password.!.");
  }

  return user;
};

const user = mongoose.model("UserCollection", userSchema);

export default user;
