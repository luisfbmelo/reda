/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Config = sequelize.define('Config', {
		api: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		file_path: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		url: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	},{
		paranoid: true
	});

	return Config;
}
