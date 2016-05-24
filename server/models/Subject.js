/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Subject = sequelize.define('Subject', {
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
		paranoid: true,
		defaultScope: {
			where: {
				status: true
			}
		},
		classMethods: {
			associate: function(models) {
				Subject.belongsToMany(models.Resource, {through: 'resource_subject'});
				Subject.belongsToMany(models.Domain, {through: 'domain_subject'});
			}
		}
	});

	return Subject;
}
