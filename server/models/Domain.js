/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Domain = sequelize.define('Domain', {
		title: {
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
				Domain.belongsToMany(models.Subject, {through: 'domain_subject'});
			}
		}
	});

	return Domain;
}
