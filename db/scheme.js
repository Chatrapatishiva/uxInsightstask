const { default: mongoose } = require("mongoose")

const schema = require("mongoose").Schema


const userSchema = new schema({
    emp_id: {type: Number},
    emp_dept_id: {type: Number},
    emp_first_name : {type: String, required: true},
    emp_last_name : {type: String},
    emp_email : {type: String, validate: {validator: ()=> Promise.resolve(false), message: "Invalid Email"}},


})

mongoose.model('user', userSchema)

module.exports = { userSchema }