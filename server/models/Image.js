/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Image = sequelize.define('Image', {
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		extension: {
			type: DataTypes.STRING(10),
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
			}
		}
	});

	return Image;
}
