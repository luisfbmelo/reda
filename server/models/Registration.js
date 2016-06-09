
/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Registration = sequelize.define('Registration', {
		email: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		token: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		used: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},	
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	}, {
		paranoid: false,
		defaultScope: {
			where: {
				status: true
			}
		}
	});

	return Registration;
};

