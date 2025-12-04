import express from "express";
import bodyParser from 'body-parser';
import apiRouter from "./routes/index.js";
import { PORT } from "./config/server.config.js";

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.use("/api",apiRouter);

app.get("/ping", (req,res) => {
    res.json({message: "Problem service is alive"});
});

app.listen(PORT, () => {
    console.log("server started at port ",PORT);
});