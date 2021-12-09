//powershell
const powershell = require("../controlador/powershell/index");

const routes = (app) => {
  app.use("/api", powershell);
};

module.exports = routes;
