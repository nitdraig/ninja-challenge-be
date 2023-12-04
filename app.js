const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const swaggerFilePath = path.join(__dirname, "swagger-users-v1.json");
const swaggerFileContent = fs.readFileSync(swaggerFilePath, "utf8");
const swaggerSpec = JSON.parse(swaggerFileContent);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("API CORRIENDO");
});
app.use("/users", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
