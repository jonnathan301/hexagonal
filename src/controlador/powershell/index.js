const   express     = require('express'),
        router      = express.Router(),
        adaptadorPowershellClass = require("../../adaptadores/powershell/index"),
        adaptadorPowershellObj = new adaptadorPowershellClass();

router.get('/powershell/ipconfig', adaptadorPowershellObj.ipconfig);

module.exports = router;