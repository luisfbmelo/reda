/**
 * Create Model
 */
module.exports = function(sequelize, DataTypes) {
	var NestedComment = sequelize.define('NestedComment', {
	}, {
		classMethods: {
			associate: function(models) {
				NestedComment.belongsTo(models.Comment, {
					foreignKey: {
						name: 'parent_id',
						allowNull: false
					}
				});

				NestedComment.belongsTo(models.Comment, {
					foreignKey: {
						name: 'child_id',
						allowNull: false
					}
				});
			}
		}
	});

	return NestedComment;
}
