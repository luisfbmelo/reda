/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Resource = sequelize.define('Resource', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		slug: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		operation: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		tech_req: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		author: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			validate: {
				isEmail: true,
			}
		},
		organization: {
			type: DataTypes.STRING,
			allowNull: false
		},
		duration: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		highlight: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},		
		reserved: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		embed: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		link: {
			type: DataTypes.TEXT,
			allowNull: true,
			validate: {
				isUrl: true,
			}
		},
		author: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	}, {
		defaultScope: {
			where: {
				status: true
			}
		},
		classMethods: {
			associate: function(models) {

				Resource.belongsToMany(models.Language, {through: 'resource_language'});
				Resource.belongsToMany(models.Year, {through: 'resource_year'});
				Resource.belongsToMany(models.Mode, {through: 'resource_mode'});
				Resource.belongsToMany(models.Domain, {through: 'resource_domain'});
				Resource.belongsToMany(models.Subject, {through: 'resource_subject'});
				Resource.belongsToMany(models.User, {through: 'resource_favorite'});
				Resource.belongsTo(models.Format);
				Resource.belongsTo(models.User);

				Resource.belongsToMany(models.Tag, {
					through: 'resource_tag',
					scope: {
					    type: "RES"
					}
				});

				Resource.hasMany(models.Rating, {
					as: 'Ratings',
					foreignKey: {
						allowNull: false
					}
				});

				Resource.hasMany(models.Comment, {
					as: 'Comments',
					foreignKey: {
						allowNull: true
					}
				});

				Resource.hasMany(models.File, {
					as: 'Files',
					foreignKey: {
						allowNull: true
					}
				});

				Resource.hasMany(models.Script, {
					as: 'Scripts',
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});

	return Resource;
}