/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var App = sequelize.define('App', {
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		link: {
			type: DataTypes.TEXT,
			allowNull: true,
			validate: {
				isUrl: true,
			}
		},
		theme: {
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
		},
		classMethods: {
			associate: function(models) {
				App.belongsToMany(models.Category, {
					through: 'app_category'
				});
				App.belongsToMany(models.System, {
					through: 'app_system'
				});
				App.belongsToMany(models.Theme, {
					through: 'app_theme'
				});
				App.belongsTo(models.User);
			}
		}
	});

	return App;
}
