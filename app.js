const express = require("express");
const hbs = require("hbs");
const path = require("path");

let indexRoute = require("./routes/index");
let signupRoute = require("./routes/signup");

let app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRoute);
app.use('/', signupRoute);

app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000/');
});

