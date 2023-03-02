var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Johny', lastname: 'Mora' })
});

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id })
});

app.listen(port);