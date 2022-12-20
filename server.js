import("./config/dbConfig.js");
import express from "express";
import electRoute from "./routes/electRoute.js";

const app = express();
const port = 6574;

app.use(express.json());
app.use("/api/v1", electRoute);

app.listen(port, ()=>{
    console.log(`Listening to port: ${port}`)
});