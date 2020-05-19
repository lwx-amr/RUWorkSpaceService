import WSModel from "../repository/WSModel";


// Funciton to check login
const getWorkSpace  = (req, res) =>{
    WSModel.findById(req.params.id, (err, data) => {
        if(err)
            res.send(err);
        res.json(data);
    });
};

const listWorkSpaces = (req, res) => {
    WSModel.find({}, (err, data) => {
        if(err)
            res.send(err);
        res.json(data);
    });
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
    WSModel.deleteOne({_id:req.params.id}, (err, data) => {
        if(err)
            res.send(err);
        res.json(data);
    });
};

const changeName = (req, res) => {
    WSModel.findById(req.params.id, (err, data) => {
        if (err)
            res.send(err);
        data.name = req.body.name;
        data.save((err, updated) => {
            if (err)
                res.send(err)
            res.json(updated);
        })
    });
};

const addNewUser = (req, res) => {
    WSModel.update(
        {_id: req.params.id},
        { "$push": { "users": req.body.id} },
        (err, data) => {
            if (err) 
                res.send(err);
            res.json(data);
        }
    );     
};

const deleteUser = (req, res) => {
    WSModel.update(
        {_id: req.params.id},
        { "$pull": { "users": req.body.id} },
        (err, data) => {
            if (err) 
                res.send(err);
            res.json(data);
        }
    ); 
};

const incNumOfJobs = (req, res) => {
    res.json({ MSG: "bate5aaaa !!" });
};

const decNumOfJobs = (req, res) => {
    res.json({ MSG: "bate5aaaa !!" });
};

module.exports = { getWorkSpace, listWorkSpaces, 
    createWS, deleteWS,
    changeName, addNewUser, deleteUser, incNumOfJobs, decNumOfJobs };
