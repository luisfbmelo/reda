/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var System = sequelize.define('System', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
	}, {
		paranoid: true,
		defaultScope: {
			where: {
				status: true
			}
		},
		classMethods: {
			associate: function(models) {
				System.belongsToMany(models.App, {
					through: 'app_system'
				});
			}
		}
	});

	return System;
}
