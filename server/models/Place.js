const Sequelize = require('Sequelize')
const db = require('./db')


const Place = db.define('place', {
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state:Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY(Sequelize.FLOAT)
});

module.exports = Place;