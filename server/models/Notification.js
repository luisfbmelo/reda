/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Notification = sequelize.define('Notification', {
		type: {
			type: DataTypes.STRING(100),
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
				Notification.belongsToMany(models.User, {through: 'users_notifications'});
			}
		}
	});

	return Notification;
}
