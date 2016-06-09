/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var App = sequelize.define('App', {
		title: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		slug: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
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
				App.belongsToMany(models.Category, {
					through: 'app_category',
					scope: {
						type: 'APPS'
					}
				});
				App.belongsToMany(models.System, {
					through: models.app_system
				});
				App.belongsToMany(models.Theme, {
					through: 'app_theme'
				});
				App.belongsTo(models.User);
				App.belongsTo(models.Image, { 
					foreignKey: { 
						allowNull: true 
					}
				});
			}
		}
	});

	return App;
}
