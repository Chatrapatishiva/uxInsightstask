const express =  require('express');
const app = new express()
const ctrl = require('../controllers/controllers');
const { model } = require('mongoose');


const routes  = () => {
    app.get('/saveData' , ctrl.saveData)

}


module.exports = routes;