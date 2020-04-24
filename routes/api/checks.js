const express = require("express");
const router = express.Router();

// Load User model
const db = require("../../models/index");

router.post("/", (req, res) => {
    db.Check.create(req.body).then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;