const express = require("express");
const axios = require('axios');
const app = express();

var https = require('https');
const httpsAgent = new https.Agent({ rejectUnauthorized: false });
var config = {
    httpsAgent: httpsAgent,
    headers: {
        'Content-Type': 'application/json'
    }
};

app.get('/', function (req, res, next) {
    res.send('server working');
});

app.get('/webhook', function (req, res, next) {
    config.url = 'https://social-integration-epsilon.herokuapp.com/webhooks?hub.mode=subscribe&hub.challenge=1158201444&hub.verify_token=meatyhamhock';
    config.method = 'get';
    axios(config).then(function (response) { }).catch(function (error) { });
});

process.on('uncaughtException', error => {
    console.log('uncaughtException', error);
});

let server = app.listen(3000, function () {
    let host = server.address().address;
    console.log('Server listening at http://%s:%s', host, 3000);
});