import UserModel from "../model/userSchema.js";

export const registerUser = async (req, res) => {
    try {
        const user = req.body;
        const userFound = await UserModel.findOne({ Username: user.Username })
        if (userFound) {
            return res.status(401).json({ message: "User already found" })
        } else {
            const newUser = new UserModel(user)
            await newUser.save();

        }

        return res.status(200).json({ message: user })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}





export const userLogin = async (req, res) => {
    try {
        const { Username, password } = req.body
        const user = await UserModel.findOne({ Username: Username, password: password })
        if (user) {
            return res.status(200).json({ data: user })
        } else {
            return res.status(401).json({ message: "invalid login" })
        }
    } catch (error) {
        console.log(error.message)
    }
    // res.send("hello loginuser")
}