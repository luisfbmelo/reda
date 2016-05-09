/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Year = sequelize.define('Year', {
		title: {
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
				Year.belongsToMany(models.Resource, {through: 'resource_year'});
			}
		}
	});

	return Year;
}
