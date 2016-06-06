/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Badword = sequelize.define('Badword', {
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	},{
		paranoid: true,
		defaultScope: {
			where: {
				status: true
			}
		}
	});

	return Badword;
}
