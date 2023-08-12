const express = require('express');
// const { readFile } = require('fs');
const { readFile } = require('fs').promises;
const app = express();

// app.get('/', (request, response) => {
//     readFile('./home.html' , 'utf8', (err, html) => {
//     if(err) {
//         response.status(500).send('sorry, out of order');
//     }
//     response.send(html);
//     })
// });

app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8'));
});


app.listen(process.env.PORT || 3000, () => console.log('app avaliable on http:localhost:3000'));
