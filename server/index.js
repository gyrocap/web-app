var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var flash = require('express-flash');

app.set('views', require('path').join(__dirname, '../client/views'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bulma/css/'));
app.use(express.static('node_modules/font-awesome/css'));
app.use(express.static('node_modules/font-awesome/fonts'));
app.use(express.static('client'));
app.use(require('cookie-session')({
    name: 'session',
    keys: ["key1", "key2"],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});

app.get('/', require('./routes/index/get'));
app.get('/register', require('./routes/register/get'));
app.post('/register', require('./routes/register/post'));
app.get('/login', require('./routes/login/get'));
app.post('/login', require('./routes/login/post'));
app.get('/logout', require('./routes/logout/get.js'));

var server = require('http').createServer(app);
var socket = require('socket.io').listen(server);

const PORT = process.env.PORT || 5000
server.listen(PORT);

socket.on('connection', function(socket){

});

module.exports.PORT = PORT;