const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(PORT, (req, res) => {
  console.log(`Server running in  http://localhost:${PORT}`);
});
