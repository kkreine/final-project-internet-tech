const {Router} = require('express');
const api = new Router();
const db = require('../db');

api.get('/:locn', (req, resp) => {
    const record = db.byLocnSeason(req.params.locn); //is this right?
    if (record) {
        resp.status(200).json(record);
    }
    else {
        resp.status(404).send('');
    }
});

module.exports = api;