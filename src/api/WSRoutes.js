import express from "express";
import { getWorkSpace, listWorkSpaces, createWS, deleteWS} from "../service/WSController";

const router = express.Router();

router.route("/workspace")
    .get(listWorkSpaces)
    .post(createWS);

router.route("/workspace/:id")
    .get(getWorkSpace)
    .delete(deleteWS);

module.exports = router;