var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/asteroid', function (req, res) {
    res.sendFile('./index.html', {root: './public'} );
} );

app.get('/dataCall', function (req, res) {
    console.log('hello');
    request({
        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-27&end_date=2017-08-02&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9',
        headers: {
            'User-Agent': 'request',
        },
    }, function (error, response, body) {
        console.log(body);
        console.log('error:', error);
        var dataObj = JSON.parse(body);
        res.send(dataObj);
    });
});



app.listen(8080);
