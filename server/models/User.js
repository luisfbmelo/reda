/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		ldap_id: {
			type: DataTypes.STRING(45),
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
				User.hasMany(models.Resource, {
					as: 'Resources',
					foreignKey: {
						allowNull: false
					}
				});

				User.hasMany(models.Rating, {
					as: 'Ratings',
					foreignKey: {
						allowNull: false
					}
				});

				User.hasMany(models.App, {
					as: 'Apps',
					foreignKey: {
						allowNull: false
					}
				});

				User.hasMany(models.Hint, {
					as: 'Hints',
					foreignKey: {
						allowNull: false
					}
				});

				User.hasMany(models.Comment, {
					as: 'Comments',
					foreignKey: {
						allowNull: false
					}
				});

				User.hasMany(models.Link, {
					as: 'Links',
					foreignKey: {
						allowNull: false
					}
				});

				User.hasMany(models.Script, {
					as: 'Scripts',
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});
    
	

	return User;
};

