/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Author = sequelize.define('Author', {
		name: {
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
				Author.belongsToMany(models.Resource, {through: 'resource_author'});
				Author.belongsToMany(models.Script, {through: 'resource_script'});
			}
		}
	});

	return Author;
}
