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
    WSModel.find({$or:[{ownerID: req.params.id},{users: req.params.id}]}, (err, data) => {
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
    WSModel.findById(req.params.id, (err, data) => {
        if (err)
            res.send(err);
        data.numOfJobs += 1;
        data.save((err, updated) => {
            if (err)
                res.send(err)
            res.json(updated);
        })
    });
};

const decNumOfJobs = (req, res) => {
    WSModel.findById(req.params.id, (err, data) => {
        if (err)
            res.send(err);
        if (data.numOfJobs > 0){
            data.numOfJobs -= 1;
            data.save((err, updated) => {
                if (err)
                    res.send(err)
                res.json(updated);
            });
        }
        else
            res.json({ Empty_WS: "This workspace either has no job profiles yet or they are already deleted" });
    });
};

const invalidRequest = (req, res) => {
    res.send("<h1>PAGE NOT FOUND</h1>");
}

module.exports = { getWorkSpace, listWorkSpaces, 
    createWS, deleteWS,
    changeName, addNewUser, deleteUser, incNumOfJobs, decNumOfJobs, invalidRequest };
