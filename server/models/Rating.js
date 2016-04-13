/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Rating = sequelize.define('Rating', {
		value: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
	}, {
		defaultScope: {
			where: {
				status: true
			}
		}
	});

	return Rating;
}
