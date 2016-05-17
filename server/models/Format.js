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
		priority: {
			type: DataTypes.INTEGER,
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
				Format.hasMany(models.Resource, {
					as: 'Resources',
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});
	return Format;
}
