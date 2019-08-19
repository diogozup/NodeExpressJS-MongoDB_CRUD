require('./models/db');

const express = require('express');
const PORT = process.env.PORT || 3000; //no terminal podemos criar vareavel de ambiente com "export PORT=5000"
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(PORT, () => {
    console.log('EXPRESS is running on PORT:',PORT);
  });

//params("url q quero" , "q funcao chama")
app.use('/employee', employeeController);  
