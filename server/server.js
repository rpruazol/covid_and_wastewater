'use strict';

const express = require('express');
const app = express();
const port = 9000;
const superagent = require('superagent');
require('dotenv').config()


app.get('/states', (req, res) => {
    const url = 'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json'
    superagent
    .get(url)
    .then(response => {
        res.send(response.text)
    })
});




app.listen(port, () => {
    console.log(`Example App listening at port ${port}`);
})