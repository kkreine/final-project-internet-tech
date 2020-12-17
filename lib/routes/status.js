const {Router} = require('express');
const api = new Router();

api.get('/', (_req, resp) => {
    resp.status(200).json({
        status: 'OK',
        message: 'The API is operating as expected'
    });
});

module.exports = api;