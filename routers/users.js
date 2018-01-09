const express = require('express');
let router = express.Router();
const EmailService = require('../services/email.js');


router.get('/', (req, res, next) => {
  res.render('usersNew');
});

router.post('/', (req, res, next) => {
  console.log("req.body: ", req.body);
  const options = {
    from: process.env.EMAIL_USER, 
    to: req.body.email,
    subject: "Welcome",
    text: "Hello",
    html: `<p>${ "Hello" }</p>`
  };

  EmailService.send(options)
    .then((result) => {
      console.log(result);
      req.flash('success', 'Sent!');
      res.render('emails/new', { result });
    })
    .catch(next);

});

module.exports = router;


