const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = 1234;

const product = require('./routes/product.route'); 


const mongoose = require('mongoose');
let dev_db_url = 'mongodb://codemania23:Chandan23@ds113495.mlab.com:13495/codemania23test';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/products', product);
app.listen(port, function()
	{ console.log('Server is up and running on port number ' + port);}
	);