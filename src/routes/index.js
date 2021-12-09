//powershell
const ipconfig = require('../network/powershell/index');

const routes = function (app){
    app.use('/api/powershell/ipconfig', ipconfig);
}

module.exports = routes;
