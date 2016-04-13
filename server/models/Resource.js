/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Resource = sequelize.define('Resource', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		author: {
			type: DataTypes.STRING(45),
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
		acceptedTerms: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'accepted_terms'
		},
		featured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
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
		}
	}, {
		defaultScope: {
			where: {
				status: true
			}
		},
		classMethods: {
			associate: function(models) {

				Resource.belongsToMany(models.Year, {through: 'resource_year'});
				Resource.belongsToMany(models.Mode, {through: 'resource_mode'});
				Resource.belongsToMany(models.Domain, {through: 'resource_domain'});
				Resource.belongsToMany(models.Subject, {through: 'resource_subject'});

				Resource.belongsToMany(models.Tag, {
					through: 'resource_tag',
					scope: {
					    type: 0
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
