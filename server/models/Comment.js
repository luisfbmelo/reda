/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var Comment = sequelize.define('Comment', {
		text: {
			type: DataTypes.TEXT,
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
		}
	});

	return Comment;
}
