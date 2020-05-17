import WSModel from "../repository/WSModel";


// Funciton to check login
const getWorkSpace  = (req, res) =>{
    res.json({"MSG": "Done"});
};

const listWorkSpaces = (req, res) => {
    res.json({ MSG: "fuck you!!" });
};

const createWS = (req, res) => {
    const newContact = new WSModel(req.body);
    newContact.save((err, newContact)=>{
        if(err)
            res.send(err);
        res.json(newContact);
    });
};

const deleteWS = (req, res) => {
    res.json({ MSG: "bate5aaaa !!" });
};

const changeName = (req, res) => {
    res.json({ MSG: "bate5aaaa !!" });
};

const addNewUser = (req, res) => {
    res.json({ MSG: "bate5aaaa !!" });
};

const deleteUser = (req, res) => {
    res.json({ MSG: "bate5aaaa !!" });
};

const incNumOfJobs = (req, res) => {
    res.json({ MSG: "bate5aaaa !!" });
};

const decNumOfJobs = (req, res) => {
    res.json({ MSG: "bate5aaaa !!" });
};

module.exports = { getWorkSpace, createWS};
