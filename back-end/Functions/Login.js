const User = require("./Userschema");
const bcrypt = require("bcrypt");

const loginuser = async(req, res) => {
    const { email, password } = req.body;
    const login = await User.findOne({ email }); 

    if (login && (await bcrypt.compare(password , login.password)))
    {
        res.json({
            message : "Login successful",
            id: login._id,
            studentname: login.username, 
            type: login.type,
        })
    }
    else {
        res.status(400).json({
            message : "Invalid credentials",
        }) 
    }
 

}
 module.exports ={loginuser}