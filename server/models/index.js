const db = require('./db')
const Activity = require('./Activity')
const Hotel = require('./Hotel')
const Place = require('./Place')
const Restaurant = require('./Restaurant')

Activity.belongsTo(Place)
Hotel.belongsTo(Place)
Restaurant.belongsTo(Place)

module.exports = {
    db,
    Activity,
    Hotel,
    Place,
    Restaurant
};