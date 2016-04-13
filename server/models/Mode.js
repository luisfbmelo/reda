/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Mode = sequelize.define('Mode', {
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
		},
		classMethods: {
			associate: function(models) {
				Mode.belongsToMany(models.Resource, {through: 'resource_mode'});
			}
		}
	});

	return Mode;
}
