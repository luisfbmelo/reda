/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Link = sequelize.define('Link', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},		
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		link: {
			type: DataTypes.TEXT,
			allowNull: true,
			validate: {
				isUrl: true,
			}
		},
		period: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('STU','TEAC'),
			allowNull: false
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	}, {
		defaultScope: {
			where: {
				status: true
			}
		}
	});

	return Link;
}
