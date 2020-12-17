/* eslint-disable require-jsdoc */
const fs = require('fs/promises');
//methods that return data
//singleton = a class that only ever has 1 instance
/**
 * 
 */
class Db {
    constructor () {
        fs.readFile('./dummydata.json', {encoding: 'utf8', flag: 'r'}).then((file) => {
            this.data = JSON.parse(file);
        }).catch((err) => console.error(err.message));
    }
    byName (name) {
        return this.data.find(record => record.common_name === name);
    }
    
    byLocnSeason (locn) {
        const zoneNum = parseInt(locn, 10);
        return this.data.filter(record => record.zone === zoneNum);
    }
}

let db = new Db();
module.exports = db;