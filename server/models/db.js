const Sequelize = require('Sequelize')
const db = new Sequelize('postgres://localhost/tripplanner', {
    logging: false
});

module.exports = db;