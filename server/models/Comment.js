/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Comment = sequelize.define('Comment', {
		text: {
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
		}
	});

	return Comment;
}
