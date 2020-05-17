//import wsModel from "../repository/WSModel";

// Funciton to check login
const getWorkSpace  = (req, res) =>{
    res.json({"MSG": "Hello There this get Workspace!!"});
};

const listWorkSpace = (req, res) => {
    res.json({ MSG: "fuck you!!" });
};
module.exports = { getWorkSpace };
