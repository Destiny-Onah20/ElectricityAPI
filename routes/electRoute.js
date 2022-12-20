import express from "express";

import { newUser, allUser, oneUser } from "../controller/electContrl.js";

const electRoute = express.Router();
// create new user
electRoute.post("/", newUser);
// all users end point
electRoute.get("/", allUser);
// one user
electRoute.get("/:id", oneUser)


export default electRoute;