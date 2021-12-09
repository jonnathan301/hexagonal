const express = require('express');
const app = express();
const config = require('./src/config/index');
const swaggerUi = require('swagger-ui-express');

// body parser
app.use(express.json());

//Api Router
const router = require('./src/routes/index');
router(app);

//api swagger
const swaggerDoc = require('./swagger.json');
app.use('/api/swagger/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.listen(config.srvPort, function () {  
    console.log(`Example app listening on http://localhost:${config.srvPort}`);
});
