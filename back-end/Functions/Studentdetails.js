const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  studentname: { type: String },
  date: [{ type: Date }],
}); 
const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
