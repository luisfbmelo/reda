/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Rating = sequelize.define('Rating', {
		value: {
			type: DataTypes.INTEGER,
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
				Rating.belongsTo(models.Resource);
			}
		}
	});

	return Rating;
}
