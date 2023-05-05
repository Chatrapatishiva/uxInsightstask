const db = require('../db/config')
const scheme = require('../db/scheme')

const mongoose = require("mongoose")

const User = mongoose.model('user', scheme.userSchema)

const saveData = (req, res) => {
    
    
    User.create({
    emp_id: 2,
    emp_dept_id: 4,
    emp_first_name : 'Shiva',
    emp_last_name : 'A',
    emp_email : 'Shiva1234@gmail.com'
    }).then(data => {
        console.log('Inserted Document Successfully')
        res.status(200).send('Inserted Document Successfully')

    }).catch(err =>  {
        console.log('Document Insertion Unsuccessfull')
        res.status(400).send('Document Insertion Unsuccessfull')
    })
}


const readData = (req, res) => {
    
    
    User.find({emp_first_name: 'Shivakumar'}, ).then(data => {
        res.status(200).send(data)
    }).catch(err =>  {
        res.status(400).send(err)
    })
}
module.exports = { saveData, readData }