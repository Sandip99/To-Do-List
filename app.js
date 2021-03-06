const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var items = [];

app.get('/', function(req, res) {
    const today = new Date();
    const options = {
        weekday: 'long', 
        day: 'numeric',
        month: 'long'
    };
    const day = today.toLocaleDateString('en-US', options);
    res.render('list', {kindOfDay: day, list: items});
});

app.post('/', function(req, res) {
    const item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Server started on port 3000.');
});