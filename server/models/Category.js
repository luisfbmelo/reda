/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Category = sequelize.define('Category', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('REC','TRY','APPS','FEEDBACK'),
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
			},
			apps: {
				where: {
					type: "APPS"
				}
			},
			feedback: {
				where: {
					type: "FEEDBACK"
				}
			}
		},
		classMethods: {
			associate: function(models) {
				Category.belongsToMany(models.Link, {
					through: 'link_category'
				});

				Category.belongsToMany(models.App, {
					through: 'app_category'
				});
			}
		}
	});

	return Category;
}
