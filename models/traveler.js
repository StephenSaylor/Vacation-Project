const { DataTypes } = require("sequelize/types");

class Traveler extends Model {}

Traveler.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
    	},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
     		allowNull: false,
		}
	}
)

module.exports = Traveler