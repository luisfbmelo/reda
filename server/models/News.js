/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var News = sequelize.define('News', {
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		slug: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		approved: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1
		},
		status: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}
	}, {
		paranoid: true,
		defaultScope: {
			where: {
				status: true
			}
		},
		classMethods: {
			associate: function(models) {

				News.belongsToMany(models.Tag, {
					through: 'news_tag',
					scope: {
					    type: "NEWS"
					}
				});

				News.hasMany(models.Comment, {
					as: 'Comments',
					foreignKey: {
						allowNull: true
					}
				});
			}
		}
	});

	return News;
}
