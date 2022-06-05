const { Router } = require("express");
const Restos = require("./modules/Restos");
const router = Router();

const resto = [
  {
    name: "RestoMC",
    km: 123,
  },
  {
    name: "RestoBar",
    km: 12,
  },
  {
    name: "RestoARG",
    km: 1,
  },
  {
    name: "RestoCBA",
    km: 2123,
  },
  {
    name: "Restorito",
    km: 33,
  },
  {
    name: "Restorant",
    km: 43,
  },
  {
    name: "Rest",
    km: 153,
  },
  {
    name: "RestMX",
    km: 12,
  },
  {
    name: "FranRest",
    km: 11,
  },
  {
    name: "Resta",
    km: 52,
  },
];

router.get("/", async (req, res) => {
  try {
    Restos.truncate();
    resto.forEach((el) => {
      Restos.create(el);
    });
    res.send("Loading Restaurants");
  } catch (error) {
    console.log(error);
  }
});

router.get("/restos", async (req, res) => {
  try {
    const data = await Restos.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

router.put("/restos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const km = parseInt(req.body.km);
    const name = req.body.name;
    const data = await Restos.update(
      { name: name, km: km },
      { where: { id: id } }
    );
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/restos/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await Restos.findAll();
    const restoMain = await Restos.findAll({
      where: {
        id: id,
      },
    });
    const filtherData = data.filter((el) => el.id != id);
    const km = restoMain[0].km;
    for (let i = 0; i < filtherData.length; i++) {
      const el = filtherData[i];
      const rest = el.km - km;
      el.km = Math.abs(rest);
    }
    res.status(200).json(filtherData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
