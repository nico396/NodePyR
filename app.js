const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fileRun =  require('./routes/runFile.js');


// CORS protocol to allow api request of AWS
app.use(function(req, res, next) {
    /*var allowedOrigins = ['http://localhost:3000', "http://vifiuidev.uncc.edu"];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
			res.setHeader('Access-Control-Allow-Origin', origin);
    }*/
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, terms, ngrams, outputpath, inputpath, label, schema1, schema2, Key");
    next();
});

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());


app.use('/runFile', fileRun);

// start express on 3001
app.listen(3002, ()=> {
  console.log("Express Server Started On Port 3001");
});

