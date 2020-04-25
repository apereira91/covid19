const express = require("express");
const router = express.Router();

// Load User model
const db = require("../../models/index");

router.post("/", (req, res) => {
    db.Check.create(req.body).then(({_id}) => db.User.findOneAndUpdate({ _id: req.body.user}, { $push: { checks: _id } }, { new: true })).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

router.get("/", (req, res) => {
    db.Check.find({ })
    .then(dbCheck => {
      res.json(dbCheck);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;