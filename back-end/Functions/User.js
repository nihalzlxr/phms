const bcrypt = require("bcrypt");
const User = require("../Functions/Userschema");

const register = async (req, res) => {
  const { username, email, password, mobile } = req.body;

    const existingUser = await User.find ({ email });

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
          mobile,
        }); 
        res.json({
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            mobile: newUser.mobile,
        })
    }}


    module.exports = { register };
