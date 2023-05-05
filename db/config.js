const mongoose = require("mongoose");
//PASSWORD: kY3jvMdgVyQ5tehk
const connectDB = () => {

    return new Promise((resolve, reject)=> {
        mongoose
        .connect(
          "mongodb+srv://shivakumar:kY3jvMdgVyQ5tehk@cluster0.pye5oei.mongodb.net/?retryWrites=true&w=majority"
        )
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err)
        });
    })

};


module.exports =  { connectDB }