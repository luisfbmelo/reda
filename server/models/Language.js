/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Language = sequelize.define('Language', {
		system: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		name: {
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
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
	},{
		classMethods: {
			associate: function(models) {
				Language.hasMany(models.Link, {
					as: 'Links',
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});

	return Language;
}
