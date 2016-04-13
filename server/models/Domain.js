/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Domain = sequelize.define('Domain', {
		description: {
			type: DataTypes.TEXT,
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
				Domain.belongsToMany(models.Resource, {through: 'resource_domain'});
			}
		}
	});

	return Domain;
}
