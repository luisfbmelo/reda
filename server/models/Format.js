/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Format = sequelize.define('Format', {
		description: {
			type: DataTypes.TEXT,
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

	return Format;
}
