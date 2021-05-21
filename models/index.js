const Traveler = require('./traveler')
const Trip = require('./trip')
const Location = require('./location')

Traveler.hasMany(Trip, {
	foreignKey: '',
})

Trip.belongsTo(Traveler, {
	foreignKey: '',
})

Trip.hasOne(Location, {
	foreignKey: '',
})

Location.belongsTo(Trip, {
	foreignKey: '',
})

module.exports = { Traveler, Trip, Location }