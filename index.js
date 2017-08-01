const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Application écoutant sur le port 3000');
})