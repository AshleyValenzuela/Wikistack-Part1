
const path = require('path');
const express = require("express");
const app = express()
const morgan = require('morgan');
const style = require('./views/layout')
app.use(morgan('dev'));
const staticMiddleware = express.static(path.join(__dirname, '/public'));
app.use(express.urlencoded({ extended: false}));
app.use(staticMiddleware);



app.get("/", async (req, res) => {
    res.send(style(""))
});

app.listen(3000)
