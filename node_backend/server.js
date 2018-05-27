const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Mailjet = require('node-mailjet');

const app = express();
app.use(express.static(__dirname));

app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// TODO: Set the keys
// You could probably pull these using the dotenv package and process.env
const MAILJET_PUBLIC_KEY = 'xxx';
const MAILJET_PRIVATE_KEY = 'xxx';

// POST endpoint for sending email
app.post('/api/email', function (req, res) {
  // TODO: get message from req.body
  const request = Mailjet
    .connect(MAILJET_PUBLIC_KEY, MAILJET_PRIVATE_KEY)
    .post("send")
    .request({
      "FromEmail": "pilot@mailjet.com",
      "FromName": "Mailjet Pilot",
      "Subject": "Your email flight plan!",
      "Text-part": "Dear passenger, welcome to Mailjet! May the delivery force be with you!",
      "Html-part": "<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with you!",
      "Recipients": [{
        "Email": "passenger@mailjet.com"
      }]
    });
  request
    .on('success', function (response, body) {
      console.log(response.statusCode, body);
      // @cmckni3 Added this so the node server actually sends a JSON response back
      res.json({
        success: true,
        error: null
      });
    })
    .on('error', function (err, response) {
      console.log(response.statusCode, err);
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
