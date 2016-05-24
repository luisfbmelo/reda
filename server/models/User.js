const bcrypt = require('bcrypt-nodejs');

/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		recover_password_token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		signup_token: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		organization: {
			type: DataTypes.STRING(500)
		},	
		hidden: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		newsletter: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},	
		approved: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1
		},	
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	}, {
		paranoid: true,
		defaultScope: {
			where: {
				status: true
			}
		},
		classMethods: {
			associate: function(models) {
				User.belongsToMany(models.Resource, {through: 'resource_favorite'});
				User.belongsToMany(models.Notification, {through: 'users_notifications'});
				User.belongsTo(models.Image);
				User.belongsTo(models.Role);

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
		},
		instanceMethods: {
			comparePassword: function(candidatePassword, callback) {
			  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
			    if (err) { return callback(err); }

			    callback(null, isMatch);
			  });
			}
		},
		hooks: {
			beforeCreate: function(user, options, cb){

				// generate a salt then run callback
				bcrypt.genSalt(10, function(err, salt) {
					if (err) { throw new Error(err); }

					// hash (encrypt) our password using the salt
					bcrypt.hash(user.password, salt, null, function(err, hash) {
					  if (err) { throw new Error(err); }
					
					  // overwrite plain text password with encrypted password
					  user.password = hash;

					  cb(null, user);
					});
				});
			}
		}
	});
    
	

	return User;
};

