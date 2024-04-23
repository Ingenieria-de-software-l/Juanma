import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        unique: true,
        required: true
    },
    members: {
        type: Array,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    date: {
        type: Date,
        required: true
    }
});

export default mongoose.model("Movie", MovieSchema)