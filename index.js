//server för att tesat sidan på andra enheter
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/fileCSS/:name', function(req, res) {
    res.sendFile(__dirname + "/style/" + req.params.name);
});

app.get('/fileJS/:name', function(req, res) {
    res.sendFile(__dirname + "/javascript/" + req.params.name);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/index.js");
});

app.get('/:name', function(req, res) {
    res.sendFile(__dirname + "/public/" + req.params.name);
});

app.get('/images/:name', (req, res) => {
    res.sendFile(__dirname + "/images/" + req.params.name);
});

app.listen('3000', () => console.log("server started an running on port: 3000"));