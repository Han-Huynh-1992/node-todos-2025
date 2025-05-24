let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let mongoose = require('mongoose');
let dbConfig = require('./config/mongoDBConnection');
let setupController = require('./api/controller/setupController');
let toDoController = require('./api/controller/todoController');

let app = express();
const port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect(dbConfig.getDBConnectionString());

app.get('/', (req, res) => {
    res.render("index");
});

setupController(app);
toDoController(app);

app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});