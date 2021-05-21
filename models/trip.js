const { DataTypes } = require("sequelize/types");

class Trip extends Model {}

Trip.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		  },
		budget: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		traveler_amount: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		traveler_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	}
)

module.exports = Trip