/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var File = sequelize.define('File', {
		name: {
			type: DataTypes.STRING,
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
		}
	});

	return File;
}
