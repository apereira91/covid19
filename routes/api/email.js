const express = require("express");
const router = express.Router();


router.post('/send', (req, res, next) => {
    var date = req.body.date
    var email = req.body.email

    
  
    var mail = {
      from: 'testproject202020@gmail.com',
      to: email,  //Change to email address that you want to receive messages on
      subject: 'New Message from the COVID Tracker Team',
      text: `Hey, you were within 1 km of an infected COVID person on ${date}. Please get tested and self-isolate.`
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
