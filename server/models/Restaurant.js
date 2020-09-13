const Sequelize = require("Sequelize")
const db = requier('./db.js')

const Restaurant = db.define('restuarant', {
    name: Sequelize.STRING,
    cuisine: Sequelize.STRING,
    price:{
        type: Sequelize.INTEGER,
        validations:{
            min:1,
            max:5
        }
    }
});

module.exports= Restaurant;
