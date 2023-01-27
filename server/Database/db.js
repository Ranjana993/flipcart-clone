import mongoose from "mongoose"


const DatabaseConn = async ( DB_URL ) => {
    
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedtopology: true });
        console.log("Successfully connected ....");
    }
    catch (error) {
        console.log(error);
    }
}
export default DatabaseConn;