/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Script = sequelize.define('Script', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
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
		operation: {
			type: DataTypes.TEXT,
			allowNull: false
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
				Script.belongsToMany(models.Language, {through: 'script_language'});
				Script.belongsToMany(models.Year, {through: 'script_year'});
				Script.belongsToMany(models.Domain, {through: 'script_domain'});
				Script.belongsToMany(models.Subject, {through: 'script_subject'});
				Script.belongsTo(models.User);
				Script.belongsTo(models.Resource);
			}
		}
	});

	return Script;
}
