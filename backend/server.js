import express from "express";
const app = express();
import { connectionDB } from "./db/connectionDB.js";
import cors from "cors";
import router from "./routes/requestRoutes.js"


// middleware
app.use(express.json());
app.use(cors());

//DATABASE CONNECTION
connectionDB(
  "mongodb+srv://Leyn:Plokinopki00@cluster2.xufamin.mongodb.net/crypto?retryWrites=true&w=majority&appName=Cluster2"
); 

// Route
app.use("/", router);

//SERVER 
app.listen(8000, () => {
    console.log("Connected to server.");
})
