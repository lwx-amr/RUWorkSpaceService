import mongoose from "mongoose";

const Schema = mongoose.Schema;

const wsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    ownerID:{
        type: Number,
        required: true
    },
    numOfJobs:{
        type: Number,
        required: true
    },
    users:{
        type: Array,
        required: true
    },
    createdDate:{
        type:Date,
        default: Date.now
    }
});

const WSModel = mongoose.model('Workspaces', wsSchema);

module.exports = WSModel;
