// Setting Templating Engine i.e 'pug' in this case

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const userprops = require('./routes/user');
const backprops = require('./routes/back');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));

// Setting Templating Engine i.e 'pug' in this case
app.set('view engine','pug');

app.use(express.static(path.join(__dirname,"public")));


app.use(userprops.router);
app.use(backprops.router);



app.listen(3000);