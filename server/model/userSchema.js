import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true, min: 5, max: 20 },
    lastName: { type: String, required: true, trim: true, min: 5, max: 20 },
    Username: { type: String, required: true, trim: true, unique: true, index: true, lowercase: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true }
})



// const USER MODEL FOR LOGIN AND REGISTER

const User = new mongoose.model("loginandregister", UserSchema);
export default User