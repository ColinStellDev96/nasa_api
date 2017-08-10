var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
// Static Paths
app.use(express.static('./public'));

// Body Parser MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/asteroid', function (req, res) {
    res.sendFile('./index.html', {root: './public'} );
} );

app.get('/nasa_data', function (req, res) {
    console.log('hello');
    request('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + req.query.date +
    '&end_date=' + req.query.date +
    '&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9',
    function (error, response, body) {
        console.log(body);
        console.log('error:', error);
        var dataObj = JSON.parse(body);
        res.send(dataObj);
    }
    );
});

app.listen(8080);
