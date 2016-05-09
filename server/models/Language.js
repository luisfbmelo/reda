/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Language = sequelize.define('Language', {
		title: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
	},{
		defaultScope: {
			where: {
				status: true
			}
		},
		classMethods: {
			associate: function(models) {
				Language.belongsToMany(models.Resource, {through: 'resource_language'});
				Language.belongsToMany(models.Script, {through: 'script_language'});
			}
		}
	});

	return Language;
}
