
const scheme = require('./db/scheme')

const mongoose = require("mongoose")

const User = mongoose.model('user', scheme.userSchema)


  describe('save data', function () {
    let connection;
  
    before(async function () {
      
    });
  
    it('should be a nice API', function () {
      // assertions here
      User.create({
        emp_id: 2,
        emp_dept_id: 4,
        emp_first_name : 'Shiva',
        emp_last_name : 'A',
        emp_email : 'Shiva1234@gmail.com'
        })
    });
  
});


describe('read data', function () {
    let connection;
  
    before(async function () {
      
    });
  
    it('should be a nice API', function () {
      // assertions here
      User.find({})
    });
  
});