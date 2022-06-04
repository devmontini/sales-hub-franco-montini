const { Router } = require("express");

const userRouter = require("./routes/users");
const loginRouter = require("./routes/login");

const router = Router();

router.use("/user", userRouter);
router.use("/login", loginRouter);

module.exports = router;
