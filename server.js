const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Mailjet = require('node-mailjet');
const cors = require('cors');
const dotenv = require('dotenv').config();
const logger = require('heroku-logger');

const app = express();

app.use(express.static(__dirname + '/dist/SafeStamp-Final'));

app.use(bodyParser.json()); // support json encoded bodies

var corsOptions = {
  origin: 'https://safestamp.herokuapp.com/api/email',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.options('*', cors(corsOptions));

// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/SafeStamp-Final/index.html'));
});

// POST endpoint for sending email
app.post('/api/email', cors(corsOptions), function (req, res) {
  // TODO: get message from req.body
  const request = Mailjet
    .connect(process.env.PUBLIC_KEY, process.env.PRIVATE_KEY)
    .post("send")
    .request({
      "FromEmail": "Matt@SafeStamp.com",
      "FromName": "Matt McGuire",
      "Subject": "Thank You For Contacting SafeStamp™!",
      "Mj-TemplateID": "406325",
      "Mj-TemplateLanguage": "true",
      "Recipients": [
        {"Email":req.body.email, "Name":req.body.name},
        {"Email":"Matt@SafeStamp.com", "Name":"Matt McGuire"}
      ],
      "Vars": {
        "name": req.body.name,
        "reason": req.body.drop2,
        "affiliation": req.body.drop,
        "email": req.body.email,
        "phone": req.body.phone,
        "origin": req.body.drop3
      }
      })
    .then(response => {
      res.json({
        success: true,
        error: null
      });
    })
    .catch(err => {
      // TODO: Look into log4js
      logger.error(err.ErrorMessage);
      // TODO: Respond with some error in JSON and set a 500 status
      res.status(500);
      res.json({
        success: false,
        error: 'Server error'
      });
    });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, '/dist/SafeStamp-Final/index.html'));
});

// HTTP listener
app.listen(process.env.PORT || 8080);
console.log('Listening on' + process.env.PORT);
module.exports = app;
