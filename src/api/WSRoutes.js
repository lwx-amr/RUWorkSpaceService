import express from "express";

const router = express.Router();

router.get("/workspace", (req, res) => {
    res.json("Hello, we are very happy that you're here");
});

module.exports = router;