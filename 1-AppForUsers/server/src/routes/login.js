const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");
const loginRouter = new Router();
const prisma = new PrismaClient();

const errorInit = "******************* ERROR *******************\n";
const errorFinish = "******************* ***** *******************";

loginRouter.post("/", async (req, res) => {
  try {
    const { name, password } = req.body;

    const data = await prisma.user.findUnique({
      where: { name: name },
    });
    if (!data) {
      res.send({ message: "Username not found" });
    } else if (data.password === password) {
      res.send(data);
    } else {
      res.send({ message: "Wrong password, please try again!" });
    }
  } catch (error) {
    console.error(errorInit, error.message + "\n", errorFinish);
    res.send({ error: error });
  }
});

module.exports = loginRouter;
