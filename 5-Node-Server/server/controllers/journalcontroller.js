//controllers are a way for you to control something that handles/controls the endpoint

const express = require("express");
const router = express.Router();
const validateSession = require("../middleware/validate-session"); //makes sure you "own" your data, must have token to use
const Journal = require("../db").import("../models/journal");

router.get("/practice", validateSession, function(req, res)
{
    res.send("Hey! This is a practice route!")
});

router.post("/create", validateSession, (req, res) => {
    const journalEntry = {
        title: req.body.journal.title,
        date: req.body.journal.date,
        entry: req.body.journal.entry,
        owner: req.user.id
    }
    Journal.create(journalEntry)
        .then(journal => res.status(200).json(journal))
        .catch(err => res.status(500).json({error: err}))
})


module.exports = router;