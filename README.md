# nodejsmongo
testing mongo db with node js

app.use() - used for middleware.

body-parser used for json parsing of response.

middleware looks like this:

app.use((req,res,next)=>{});

using routers as middle ware:

let express = require('express');
const app = express();
const xyzRoute = require('./routes/xyz.route');


app.use("/test/xyz",xyzRoute);


xyzRoute.route.js

const express = require('express');
const xyzrouter = express.Router();


xyzrouter.get("/t1",()=>{});


module.exports = xyzrouter;
