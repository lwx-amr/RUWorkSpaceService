import express from "express";
import { createWS } from "../service/WSController";

const router = express.Router();

router.get("/workspace", (req, res) => {
    res.json("Hello, we are very happy that you're here");
});

router.post("/create", createWS);

module.exports = router;