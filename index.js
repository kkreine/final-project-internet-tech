const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const api = express();

api.use(helmet());
api.use(cors());

api.use('/status', require('./lib/routes/status'));
api.use('/by-name', require('./lib/routes/search-by-name'));
api.use('/by-locn-season', require('./lib/routes/search-by-locn-season'));

api.listen(port, () => {
    /*eslint-disable no-console */
    console.log(`Server is running and listening on port ${port}`);
    /*eslint-enable no-console */
});