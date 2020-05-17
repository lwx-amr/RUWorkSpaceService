//import wsModel from "../repository/WSModel";

// Funciton to check login
const getWorkSpace  = (req, res) =>{
    res.json({"MSG": "Hello There!!"});
};

const listWorkSpace = (req, res) => {
    res.json({ MSG: "fuck you!!" });
};

const createWS = (req, res) => {
    res.json({ MSG: "Created!!" });
};

module.exports = { getWorkSpace };