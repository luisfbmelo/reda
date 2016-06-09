/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var AppSystem = sequelize.define('app_system', {
		link: {
			type: DataTypes.STRING,
			allowNull: false
		},
	}, {
		paranoid: false,
		classMethods: {
			associate: function(models) {
				
			}
		}
	});

	return AppSystem;
}
