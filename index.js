const express = require('express');
const app = express();
const config = require('./src/config/index');
const cors = require('cors')
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');


app.use(helmet());
app.use(cors());

// body parser
app.use(express.json());

//Api Router
const router = require('./src/rutas/index');
router(app);

//api swagger
const swaggerDoc = require('./swagger.json');
app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.listen(config.srvPort, function () {  
    console.log(`Example app listening on http://localhost:${config.srvPort}`);
});
