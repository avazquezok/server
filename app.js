const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.get('/', async (request, response) => {
    console.log(request.url);
    let file = request.url.substring(2)  // le saca del principio '/?' a la url porque llega como '/?emercado-api...'
    file = './' + file
    response.send(await readFile(file, 'utf8'))
});


app.listen(3000);
