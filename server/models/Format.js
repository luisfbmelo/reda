/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Format = sequelize.define('Format', {
		title: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		type: {
			type: DataTypes.STRING,
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
				Format.belongsTo(models.Image);
			}
		}
	});
	return Format;
}
