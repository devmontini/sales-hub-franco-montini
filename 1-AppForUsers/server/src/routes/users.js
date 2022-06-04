const { Router, response } = require("express");
const { PrismaClient, Prisma } = require("@prisma/client");
const userRouter = new Router();
const prisma = new PrismaClient();

const errorInit = "******************* ERROR *******************\n";
const errorFinish = "******************* ***** *******************";

userRouter.get("/", async (req, res) => {
  try {
    const data = await prisma.user.findMany({
      orderBy: {
        name: "asc",
      },
    });
    res.json(data);
  } catch (error) {
    console.error(errorInit, error.message + "\n", errorFinish);
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await prisma.user.findUnique({
      where: { id: id },
    });
    res.json(data);
  } catch (error) {
    console.error(errorInit, error.message + "\n", errorFinish);
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const { name, role, email, password } = req.body;

    const findName = await prisma.user.findUnique({
      where: { name: name },
    });

    const findEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!findName && !findEmail) {
      const data = await prisma.user.create({
        data: { name, role, email, password },
      });
      const user = await prisma.user.findUnique({
        where: { name: name },
      });
      res
        .status(201)
        .json({ message: `User ${data.name} created`, id: user.id });
    } else if (findName) {
      res.status(201).json({ error: `The usename already exists` });
    } else {
      res.status(201).json({ error: `The email already exists` });
    }
  } catch (error) {
    console.error(errorInit, error + "\n", errorFinish);
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.delete("/:id/:idu", async (req, res) => {
  try {
    const myId = parseInt(req.params.id);
    const userId = parseInt(req.params.idu);
    const myData = await prisma.user.findUnique({
      where: { id: myId },
    });

    if (myData.role === true) {
      const userData = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (userData.role === false) {
        const data = await prisma.user.delete({
          where: { id: userId },
        });

        res
          .status(200)
          .json({ message: `The user ${data.name} has been deleted!` });
      } else {
        res
          .status(200)
          .json({ error: `It is forbidden to delete others admins` });
      }
    } else {
      res.status(200).json({
        error: `${myData.name} user does not have authorization to delete`,
      });
    }
  } catch (error) {
    console.error(errorInit, error.message + "\n", errorFinish);
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.put("/:id/:idu", async (req, res) => {
  try {
    const myId = parseInt(req.params.id);
    const userId = parseInt(req.params.idu);
    const { name, role, email, password } = req.body;

    const myData = await prisma.user.findUnique({
      where: { id: myId },
    });

    const userData = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!name || !email || !password) {
      res.status(200).json({ tryagain: `You need complete all data` });
    } else if (myId === userId) {
      const data = await prisma.user.update({
        where: { id: userId },
        data: { name: name, role: role, email: email, password: password },
      });
      res.status(200).json({ message: `Your data its updated` });
    } else if (userData.role === false && myData.role) {
      const data = await prisma.user.update({
        where: { id: userId },
        data: { name: name, role: role, email: email, password: password },
      });
      res.status(200).json({ message: `User ${data.name} updated` });
    } else if (userData.role === true) {
      res.status(200).json({ error: `It is forbidden to edit others admins` });
    } else {
      res.status(200).json({ error: `It is forbidden to edit others users` });
    }
  } catch (error) {
    console.error(errorInit, error.message + "\n", errorFinish);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = userRouter;
