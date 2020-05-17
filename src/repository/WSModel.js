import mongoose from "mongoose";

const Schema = mongoose.Schema;

const wsSchema = new Schema({
    name:{
        type:String,
        required: true
    }
});

const WSModel = mongoose.model('Workspaces', wsSchema);

module.exports = WSModel;
