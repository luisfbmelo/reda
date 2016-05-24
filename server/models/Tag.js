/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Tag = sequelize.define('Tag', {
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('RES','NEWS','REC'),
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
				Tag.belongsToMany(models.Resource, {
					through: 'resource_tag'
				});

				Tag.belongsToMany(models.News, {
					through: 'news_tag'
				});

				Tag.belongsToMany(models.Link, {
					through: 'link_tag'
				});
			}
		}
	});

	return Tag;
}
