const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log('Litening on port ' + process.env.PORT);
});