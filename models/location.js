const { DataTypes } = require("sequelize/types");

class Location extends Model {}

Location.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		  },
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}	  
	}
)

module.exports = Location