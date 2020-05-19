import express from "express";
import { getWorkSpace, listWorkSpaces,
    createWS, deleteWS,
    changeName, addNewUser, deleteUser,
    incNumOfJobs, decNumOfJobs } from "../service/WSController";

const router = express.Router();

router.route("/workspace")
    .get(listWorkSpaces)
    .post(createWS);

router.route("/workspace/:id")
    .get(getWorkSpace)
    .delete(deleteWS);

router.route("/workspace/users/:id")
    .post(addNewUser)
    .delete(deleteUser);

module.exports = router;