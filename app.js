const express =  require('express');
const cors = require('cors');
const app = new express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const db = require('./db/config')
const routes = require('./routes/routes');
const ctrl = require('./controllers/controllers');

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use(routes())
const PORT = 3000;

app.get('/', (req, res)=> {
    res.status(200).json({status: 'success', message: 'Home'})
});

app.get('/saveData' , ctrl.saveData);
app.get('/readData' , ctrl.readData);


db.connectDB().then(data=> {
    console.log('DB Connection Successful!');
}).catch(err=> {
    console.log('DB Connection Unsuccessful!');
})

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})
