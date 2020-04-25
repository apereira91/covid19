const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser")
const path = require("path");
const routes = require("./routes");
const nodemailer = require("nodemailer");
const creds = require("./config/email");

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("All works fine!");
  }
});

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/'))
});
}



// Connect to the Mongo DB
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  app.use(passport.initialize());
  require("./config/passport")(passport);

  app.use(routes);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});                     
