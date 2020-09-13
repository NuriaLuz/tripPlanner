const Sequelize = require("Sequelize")
const db = require('./db.js')

const Restaurant = db.define('restaurant', {
    name: Sequelize.STRING,
    cuisine: Sequelize.STRING,
    price: {
      type: Sequelize.INTEGER,
      validations: {
        min: 1,
        max: 5
      }
    }
  });

module.exports= Restaurant;
