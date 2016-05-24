/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Theme = sequelize.define('Theme', {
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
				Theme.belongsToMany(models.App, {
					through: 'app_theme'
				});
			}
		}
	});

	return Theme;
}
