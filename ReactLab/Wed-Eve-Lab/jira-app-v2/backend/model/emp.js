const mongoose = require("mongoose");

const EmpSchema = mongoose.Schema({
    empId: String,
    empName: String,
    empSkills: String,
    teamName: String
});

module.exports = mongoose.model("Emp", EmpSchema);