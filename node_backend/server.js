const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Mailjet = require('node-mailjet');
const cors = require('cors');

const app = express();
app.use(express.static(__dirname));

app.use(bodyParser.json()); // support json encoded bodies

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.options('*', cors(corsOptions));

// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// TODO: Set the keys
// You could probably pull these using the dotenv package and process.env
const MAILJET_PUBLIC_KEY = '53cbac17c56ed2ed3ba17588207e8016';
const MAILJET_PRIVATE_KEY = '982a6a9df69a31c52a952af8e79b07df';

// POST endpoint for sending email
app.post('/api/email', cors(corsOptions), function (req, res) {
  // TODO: get message from req.body
  const request = Mailjet
    .connect(MAILJET_PUBLIC_KEY, MAILJET_PRIVATE_KEY)
    .post("send")
    .request({
      "FromEmail": "Matt@SafeStamp.com",
      "FromName": "Matt McGuire",
      "Subject": "Thank You For Contacting SafeStamp™!",
      "Text-part": "Thanks so much for reaching out, " + req.body.name + ". I'll be contacting you as soon as I can regarding your " + req.body.drop2 + " request.",
      "Recipients": [{
        "Email": req.body.email,
        "Bcc": "matt@safestamp.com"
      }]
    })
    .then(response => {
      res.json({
        success: true,
        error: null
      });
    })
    .catch(err => {
      // TODO: Look into log4js
      console.error(err.ErrorMessage);
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
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// HTTP listener
app.listen(3000, function () {
  console.log('Example listening on port 3000!');
});

module.exports = app;
