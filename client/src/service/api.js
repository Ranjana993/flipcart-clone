import axios from "axios";


const URL = "http://localhost:9000"

export const authSignUpUser = async (data) => {
    try {
        return await axios.post(`${URL}/register`, data)
        // console.log("Posted ")
    }
    catch (error) {
        console.log("error while calling signUpUser api ..", error.message);
    }
}


export const authLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
        // console.log("Posted ")
    }
    catch (error) {
        console.log("error while calling Login api ..", error.message);
        return error.response
    }
}






