// Requiring module
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var path = require('path');
var connectDB = require('./config/db');


// Creating express object
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors()); // used to avoid cors error
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'js')));
app.set("views", path.join(__dirname, "views"));

// View engine setup
app.set('view engine', 'ejs');
var index = require('./routes/index');
app.use('/', index);

//connect to database
connectDB();

// Handling GET request
app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server') 
    res.end() 
}) 


// Without middleware
app.get('/user', function (req, res) {
 
    // Rendering home.ejs page
    res.render('home');
})
/*fs.readdirSync('./controllers').forEach(function (file) {
    if (file.substr(-3) == '.js') {
        route = require('./controllers/' + file);
        console.log('Controller', file);
        route.controller(app);
        
    }
});*/

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));

module.exports = app;
