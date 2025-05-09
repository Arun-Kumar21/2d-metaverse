import express from "express";
import { signin, signup } from "../../controller/index";

import { spaceRouter } from "./space";

export const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

router.use("/space", spaceRouter);