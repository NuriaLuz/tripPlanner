const Sequelize = require('Sequelize');
const db = require('./db')

const Hotel = db.define('hotel', {
    name: Sequelize.STRING,
    num_stars: {
        type: Sequelize.FLOAT,
        validations: {
            min: 1.0,
            max: 5.0
        }
    },
    amenities: Sequelize.STRING
});

module.exports= Hotel;