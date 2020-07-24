require("dotenv").config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.use(express.static('public'));// link to public folder 

// link to views folder
app.set('view engine', 'ejs'); 
app.set('views', 'views');

app.use(require('./routes/index'));//reference of where we placed the index

app.use(require('./routes/albums'));//reference of where we placed the albums

app.use(require('./routes/feedback'));//reference of where we placed the feedback

app.use(require('./routes/api'));//reference of where we placed the api

app.listen(PORT, () => {
    console.log(`Listening on port 3000`);
})