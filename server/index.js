import express from "express";
import DatabaseConn from "./Database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import router from "./routes/route.js";
import cors from "cors"


const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
const PORT = process.env.PORT || 9000;
const DB_URL = process.env.DB_URL;



// DATABASE CONNECTION...
DatabaseConn(DB_URL);
app.use('/', router)

app.get('/', (req, res) => {
    res.send("Hello ")
})




app.listen(PORT, () => console.log(`app is running on http://localhost:${PORT}`))
// INSERTING PRODUCT.....
DefaultData();