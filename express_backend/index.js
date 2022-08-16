const express = require('express');

const app = express();

const admin = require('./src/router/admin');

app.use(express.json());

app.use('/admin',admin);


app.listen(5000,() => {
    console.log("Server is running on port 5000");
})