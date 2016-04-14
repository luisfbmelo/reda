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
			type: DataTypes.ENUM('REC','TRY'),
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
		},
		scopes:{
			recommended: {
				where: {
					type: "REC"
				}
			},
			try: {
				where: {
					type: "TRY"
				}
			}
		},
		classMethods: {
			associate: function(models) {
				Link.belongsToMany(models.Category, {
					through: 'link_category'
				});
			}
		}
	});

	return Link;
}
