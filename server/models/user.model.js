import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    favMovies: {
        type: mongoose.Schema.Types.Array,
        required: true,
        ref: "Movie"
    }
});

export default mongoose.model("User", UserSchema)