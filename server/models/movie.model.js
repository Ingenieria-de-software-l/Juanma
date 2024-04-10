import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

export default mongoose.model("Movie", MovieSchema)