/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Cycle = sequelize.define('Cycle', {
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
				Cycle.belongsToMany(models.Link, {
					through: 'link_cycle'
				});
			}
		}
	});

	return Cycle;
}
