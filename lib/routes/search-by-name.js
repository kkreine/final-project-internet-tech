const {Router} = require('express');
const api = new Router();
const db = require('../db');

api.get('/:name', (req, resp) => {
    const record = db.byName(req.params.name);
    if (record) {
        resp.status(200).json(record);
    }
    else {
        resp.status(404).send('');
    }
});

module.exports = api;