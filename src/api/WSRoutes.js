import express from "express";
import { getWorkSpace, listWorkSpaces,
    createWS, deleteWS,
    changeName, addNewUser, deleteUser,
    incNumOfJobs, decNumOfJobs, invalidRequest } from "../service/WSController";

const router = express.Router();

router.route("/workspace/user/:id")
    .get(listWorkSpaces);

router.route("/workspace")
    .post(createWS);

router.route("/workspace/:id")
    .get(getWorkSpace)
    .delete(deleteWS)
    .patch(changeName);

router.route("/workspace/users/:id")
    .post(addNewUser)
    .delete(deleteUser);

router.route("/workspace/jobs/:id")
    .patch(incNumOfJobs)
    .put(decNumOfJobs);

//catch all other routes
router.route("*")
    .get(invalidRequest)
module.exports = router;