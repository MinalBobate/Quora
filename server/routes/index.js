import express from 'express'
const router = express.Router();

import questionRouter from "./Question.js";
import answerRouter  from "./Answer.js";

router.get("/", (req, res) => {
  res.send("This api is reserved for quora clone");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);

export default router;