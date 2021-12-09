const adaptadorPowershellClass = require("../../adaptadores/powershell/index")
const adaptadorPowershellObj = new adaptadorPowershellClass();
const express = require('express');
const puertoPowershellClass = require("../../puertos/powershell/index");
const puertoPowershellObj = new puertoPowershellClass(adaptadorPowershellObj);
const router = express.Router();

router.get('/', (req, res, next) => {    
    puertoPowershellObj.ipconfig().then(data => {          
        res.status(200).send(data);        
        next();
    }).catch(error => {
        console.log(error)
        res.status(500).send(error);
    })
});

module.exports = router;