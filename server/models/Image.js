/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Image = sequelize.define('Image', {
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		extension: {
			type: DataTypes.STRING(10),
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
				Image.hasOne(models.Resource, {
					foreignKey: {
						name: 'cover_image_id',
						allowNull: false
					}
				});

				Image.hasOne(models.News, {
					foreignKey: {
						name: 'cover_image_id',
						allowNull: true
					}
				});

				Image.hasOne(models.Format, {
					as: 'Files',
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});

	return Image;
}
