const Food = require("./Foodschema");


const order = async (req, res) => {
    const  { studentname,food }= req.body;
    const neworder= await Food.create({ 
        studentname,
        food,
    });
    res.json({
        id: neworder._id,
        studentname: neworder.studentname,
        food: neworder.food,
    }) 
}

const breakfast = async (req,res) =>{
    const breakfast = await Food.find();
    res.json(breakfast);
}


module.exports = {order,breakfast};