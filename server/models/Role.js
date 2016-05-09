/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Role = sequelize.define('Role', {
		value: {
			type: DataTypes.STRING(100),
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

	return Role;
}