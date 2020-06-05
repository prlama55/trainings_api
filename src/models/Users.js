const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
    username: { type: String, required: "Username is requireD" },
    password: { type: String, required: "Password is requireD" },
}, {
    timestamps: true,
});
module.exports = mongoose.model("User", UserSchema);