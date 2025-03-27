import mongoose from "mongoose";

const gashaSchma = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const gashaModel =mongoose.models.gahsa || mongoose.model("gasha",gashaSchma);

export default gashaModel;