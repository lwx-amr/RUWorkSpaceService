import mongoose from "mongoose";

const Schema = mongoose.Schema;

const wsSchema = new Schema({
    name:{
        type:String,
        required: true
    }
});

const wsModel = mongoose.model('workspaces', wsSchema);

module.exports = wsModel;
