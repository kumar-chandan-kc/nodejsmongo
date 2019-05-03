const Product = require('../models/product.model');

var http = require("http");
// var request = require('request');

exports.test = function(req,res)
{
res.send('hello my code has been established on basics');
};


exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};


exports.product_details_relative = function (req, res) {
    Product.find({"name":req.params.id}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};


exports.product_test_promise = function(req,response)
{try{
	var options = {
  host: 'http://localhost',
  port: 1234,
  path: '/test'
};

var req = http.get(options, function(res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    // var body = Buffer.concat(bodyChunks);
    response.send(bodyChunks[0]);
    // ...and/or process the entire body here.
  })
});
// var checkvar;
// this.request('http://127.0.0.1:1234/test', function (err, res) {
//   if (err) return console.error(err.message);

//   checkvar = res.body;
//   // Hello world

 
// });

// response.send(checkvar);
// res.send("test working");
}
catch(e)
{response.send(e);}
};